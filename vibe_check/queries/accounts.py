from .client import Queries
from pymongo.errors import DuplicateKeyError
from models import AccountOutWithHashedPassword, AccountIn
from bson.objectid import ObjectId


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "accounts"

    def get(self, username: str):
        # RILEY'S CODE
        result = self.collection.find_one({"username": username.lower()})

        if result is None:
            return None

        result["id"] = str(result["_id"])
        return AccountOutWithHashedPassword(**result)

        # OUR ORIGINAL CODE

        # props = self.collection.find_one({"username": username})
        # if not props:
        #     return None
        # props["id"] = str(props["_id"])
        # return Account(**props)

    def create(self, info: AccountIn, hashed_password: str):
        # RILEY'S CODE
        info.username = info.username.lower()
        account = info.dict()
        del account["password"]
        account["hashed_password"] = hashed_password

        if self.get(account["username"]) is not None:
            raise DuplicateAccountError

        self.collection.insert_one(account)
        account["id"] = str(account["_id"])
        return AccountOutWithHashedPassword(**account)

        # OUR ORIGINAL CODE

        # props = info.dict()
        # props["password"] = hashed_password
        # try:
        #     self.collection.insert_one(props)
        # except DuplicateKeyError:
        #     raise DuplicateAccountError()
        # props["id"] = str(props["_id"])
        # return Account(**props)
