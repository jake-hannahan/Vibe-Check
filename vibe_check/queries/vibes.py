from .client import Queries
from models import Mood, ActivityCategory, Activity, VibeIn, VibeOut
from typing import List


class MoodQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "moods"

    def get_all(self) -> List[Mood]:
        moods = []
        for mood in self.collection:
            moods.append(Mood(**mood))
        return moods


class ActivityCategoryQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "activity_categories"

    def get_all(self) -> List[ActivityCategory]:
        categories = []
        for category in self.collection:
            categories.append(ActivityCategory(**category))
        return categories


class VibeQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "vibes"

    def create(self, params: VibeIn) -> VibeOut:
        vibe = params.dict()
        self.collection.insert_one(vibe)
        vibe["id"] = str(vibe["_id"])
        # vibe["created_by"] =
        # TODO: Add authentication
        return VibeOut(**vibe)

    def get_one():
        pass

    def get_all():
        pass

    def get_all_by_creator():
        pass

    def get_all_by_mood():
        pass

    def edit():
        pass

    def delete():
        pass
