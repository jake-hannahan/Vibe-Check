from .client import Queries
from models import Mood, ActivityCategory, VibeIn, VibeOut
from typing import List
from bson import ObjectId
from .spotify import SpotifyQueries


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

    def create(
        self, params: VibeIn, created_by: str, account_data: dict
    ) -> VibeOut:
        vibe = params.dict()
        vibe["created_by"] = created_by

        playlist = SpotifyQueries
        self.COLLECTION = "spotify"
        actualPlaylist = playlist.create_playlist(
            self, spotify_id=vibe["spotify_id"], account_data=account_data
        )
        actualPlaylist = actualPlaylist.dict()

        self.COLLECTION = "vibes"

        vibe["playlist_id"] = actualPlaylist["id"]
        result = self.collection.insert_one(vibe)
        vibe["_id"] = result.inserted_id
        vibe["id"] = str(vibe["_id"])

        return VibeOut(**vibe)

    def get_one(self, vibe_id: str, account_data: dict) -> VibeOut:
        vibe = self.collection.find_one({"_id": ObjectId(vibe_id)})
        if vibe:
            vibe["id"] = str(vibe["_id"])
            return VibeOut(**vibe)
        else:
            return None

    def get_all(self, account_data: dict) -> List[VibeOut]:
        vibes = self.collection.find()
        result = []
        for vibe in vibes:
            vibe["id"] = str(vibe["_id"])
            result.append(VibeOut(**vibe))
        return result

    def get_all_by_creator(self, account_data: dict) -> List[VibeOut]:
        vibes = self.collection.find({"created_by": account_data["username"]})
        result = []
        for vibe in vibes:
            vibe["id"] = str(vibe["_id"])
            result.append(VibeOut(**vibe))
        return result

    def get_all_by_mood(self, mood: str, account_data: dict) -> List[VibeOut]:
        vibes = self.collection.find({"mood": mood})
        result = []
        for vibe in vibes:
            vibe["id"] = str(vibe["_id"])
            result.append(VibeOut(**vibe))
        return result

    def edit(
        self, vibe_id: str, params: VibeIn, account_data: dict
    ) -> VibeOut:
        vibe = params.dict()

        oldVibe = self.get_one(vibe_id, account_data)
        if vibe["spotify_id"] == oldVibe.dict()["spotify_id"]:
            pass
        else:
            playlist = SpotifyQueries
            self.COLLECTION = "spotify"
            playlist.delete_playlist(
                self,
                playlist_id=oldVibe.dict()["playlist_id"],
                account_data=account_data,
            )
            actualPlaylist = playlist.create_playlist(
                self, spotify_id=vibe["spotify_id"], account_data=account_data
            )
            actualActualPlaylist = actualPlaylist.dict()
            self.COLLECTION = "vibes"
            vibe["playlist_id"] = actualActualPlaylist["id"]

        self.collection.update_one({"_id": ObjectId(vibe_id)}, {"$set": vibe})
        vibe["_id"] = ObjectId(vibe_id)
        vibe["id"] = str(vibe["_id"])
        vibe["created_by"] = account_data["username"]
        return VibeOut(**vibe)

    def delete(self, vibe_id: str, account_data: dict) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(vibe_id)})
        return result.deleted_count > 0
