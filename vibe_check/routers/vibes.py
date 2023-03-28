from authenticator import authenticator
from fastapi import APIRouter, Depends

# from models import Vibe
from queries.vibes import VibeQueries

router = APIRouter()


@router.post("/api/vibes", response_model=vibe_list)
async def create_vibe(
    account_data: dict = Depends(authenticator.get_account_data),
):
    pass


# line 11 should be current user data

# also change vibe model to include user_id i think to allow for authentication

# get all vibes method; return (queries.vibes_list = user_id = account_data["user_id"]) or like... something
