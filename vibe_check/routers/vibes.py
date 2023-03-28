from authenticator import authenticator
from fastapi import APIRouter, Depends
from models import VibeIn, VibeOut
from queries.vibes import VibeQueries

router = APIRouter()


@router.post("/api/vibes", response_model=VibeOut)
async def create_vibe(
    params: VibeIn,
    queries: VibeQueries = Depends(),
    # TODO: Add authentication
):
    return queries.create(params)


# line 11 should be current user data

# also change vibe model to include user_id i think to allow for authentication

# get all vibes method; return (queries.vibes_list = user_id = account_data["user_id"]) or like... something
