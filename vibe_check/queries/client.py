import os
import pymongo


MONGO_URL = os.environ.get("MONGO_URL", 'test')
client = pymongo.MongoClient(MONGO_URL)


class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
