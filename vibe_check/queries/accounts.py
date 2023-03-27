from .client import Queries
from pymongo.errors import DuplicateKeyError
from models import Account, AccountIn


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "accounts"

    def get(self, username: str) -> Account:
        props = self.collection.find_one({"username": username})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)

    def create(self, info: AccountIn, hashed_password: str) -> Account:
        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)
