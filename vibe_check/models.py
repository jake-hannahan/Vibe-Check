from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token  # double check this


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value


class AccountIn(BaseModel):
    username: str
    password: str


class AccountOut(BaseModel):
    id: str
    username: str


class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str


class Account(AccountIn):
    id: PydanticObjectId


class AccountForm(BaseModel):  # using for jwtdown; asking for a form
    username: str
    password: str


class AccountToken(Token):  # finish this
    pass
