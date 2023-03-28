from fastapi import (
    APIRouter,
    Request,
    Response,
    Depends,
    HTTPException,
    status,
)
from models import AccountIn, AccountForm, AccountToken
from queries.accounts import AccountQueries, DuplicateAccountError
from authenticator import authenticator


router = APIRouter()


@router.post("/api/accounts")
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    queries: AccountQueries = Depends(),  # dependency injection
):
    hashed_password = authenticator.get_hashed_password(info.password)

    try:
        account = queries.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials.",
        )

    form = AccountForm(username=info.username, password=info.password)

    token = await authenticator.login(response, request, form, queries)

    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken, )
async def get_token(

)
