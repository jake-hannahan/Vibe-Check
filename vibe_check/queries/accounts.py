from .client import Queries
from models import AccountOutWithHashedPassword, AccountIn


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "accounts"

    def get(self, username: str):
        result = self.collection.find_one({"username": username.lower()})

        if result is None:
            return None

        result["id"] = str(result["_id"])
        return AccountOutWithHashedPassword(**result)

    def create(self, info: AccountIn, hashed_password: str):
        info.username = info.username.lower()
        account = info.dict()
        del account["password"]
        account["hashed_password"] = hashed_password

        if self.get(account["username"]) is not None:
            raise DuplicateAccountError

        self.collection.insert_one(account)
        account["id"] = str(account["_id"])
        return AccountOutWithHashedPassword(**account)
