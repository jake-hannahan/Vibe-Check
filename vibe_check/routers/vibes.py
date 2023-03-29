from authenticator import authenticator
from fastapi import APIRouter, Depends, HTTPException
from models import VibeIn, VibeOut, AccountOut, AccountToken, Mood, ActivityCategory
from queries.vibes import VibeQueries
from typing import List
# from fastapi.security import OAuth2PasswordBearer


router = APIRouter()
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# async def get_current_user(token: str = Depends(oauth2_scheme)) -> AccountOut:
#     account_token = AccountToken(token)
#     return account_token.account
# TODO ask Riley about how to automate the process for putting in
# current user for created_by


@router.post("/api/vibes", response_model=VibeOut)
async def create_vibe(
    params: VibeIn,
    created_by: str,
    # current_user: AccountOut = Depends(get_current_user),
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    # created_by = current_user.username
    return queries.create(params, created_by)

@router.get("/api/vibes/{vibe_id}", response_model=VibeOut)
async def get_vibe(
    vibe_id: str,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibe = queries.get_one(vibe_id)
    if vibe is None:
        raise HTTPException(status_code=404, detail="Vibe not found")
    return vibe


@router.get("/api/vibes", response_model=List[VibeOut])
async def get_all_vibes(
    queries: VibeQueries = Depends(),
):
    vibe = queries.get_all()
    return vibe

@router.delete("/api/vibes/{vibe_id}")
async def delete_vibe(
    vibe_id: str,
    queries: VibeQueries = Depends(),
):
    vibe = queries.get_one(vibe_id)
    if vibe is None:
        raise HTTPException(status_code=404, detail="False: can't delete vibe with given vibe id")
    return queries.delete(vibe_id)

@router.get("/api/vibes/creator/{created_by}", response_model=List[VibeOut])
async def get_all_by_creator(
    created_by: str,
    queries: VibeQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    vibes = queries.get_all_by_creator(created_by)
    return vibes

@router.get("/api/vibes/mood/{mood}", response_model=List[VibeOut])
async def get_all_by_mood(
    mood: str,
    queries: VibeQueries = Depends(),
):
    vibes = queries.get_all_by_mood(mood)
    return vibes

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
            raise HTTPException(status_code=404, detail="Invalid activity category")
    existing_vibe = queries.get_one(vibe_id)
    existing_vibe = existing_vibe.dict()
    created_by = existing_vibe["created_by"]
    vibe = queries.edit(vibe_id, params, created_by)
    return vibe
