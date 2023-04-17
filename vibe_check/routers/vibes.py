from authenticator import authenticator
from fastapi import APIRouter, Depends, HTTPException
from models import VibeIn, VibeOut, Mood, ActivityCategory
from queries.vibes import VibeQueries
from typing import List


router = APIRouter()


@router.post("/api/vibes", response_model=VibeOut)
async def create_vibe(
    params: VibeIn,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    created_by = account_data["username"]
    return queries.create(params, created_by, account_data)


@router.get("/api/vibes/me", response_model=List[VibeOut])
async def get_all_by_creator(
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibes = queries.get_all_by_creator(account_data)
    return vibes


@router.get("/api/vibes?mood", response_model=List[VibeOut])
async def get_all_by_mood(
    mood: str,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibes = queries.get_all_by_mood(mood, account_data)
    return vibes


@router.get("/api/vibes/{vibe_id}", response_model=VibeOut)
async def get_vibe(
    vibe_id: str,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibe = queries.get_one(vibe_id, account_data)
    if vibe is None:
        raise HTTPException(status_code=404, detail="Vibe not found")
    return vibe


@router.get("/api/vibes", response_model=List[VibeOut])
async def get_all_vibes(
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibe = queries.get_all(account_data)
    return vibe


@router.delete("/api/vibes/{vibe_id}")
async def delete_vibe(
    vibe_id: str,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibe = queries.get_one(vibe_id, account_data)
    if vibe is None:
        raise HTTPException(status_code=404, detail="""False:
          can't delete vibe with given vibe id""")
    return queries.delete(vibe_id, account_data)


@router.put("/api/vibes/{vibe_id}", response_model=VibeOut)
async def update_vibe(
    vibe_id: str,
    params: VibeIn,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    if params.mood not in [m.value for m in Mood]:
        raise HTTPException(status_code=404, detail="Invalid mood")

    for activity in params.activities:
        if activity.category not in [c.value for c in ActivityCategory]:
            raise HTTPException(status_code=404,
                                detail="Invalid activity category")
    vibe = queries.edit(vibe_id, params, account_data)
    return vibe
