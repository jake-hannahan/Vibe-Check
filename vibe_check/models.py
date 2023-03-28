from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token


class AccountIn(BaseModel):
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    username: str


class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str


class AccountForm(BaseModel):  # using for jwtdown; asking for a form
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut
