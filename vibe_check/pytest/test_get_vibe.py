from fastapi.testclient import TestClient
from pydantic import BaseModel
from authenticator import authenticator
from main import app
from queries.vibes import VibeQueries
from typing import List
from enum import Enum


client = TestClient(app)

# -------- MODELS ---------- #


def fake_account_data():
    return {"id": "644a9dd9c609f8a9d72edd17", "username": "user"}


class Mood(str, Enum):
    productive = "productive"
    adventurous = "adventurous"
    confident = "confident"
    romantic = "romantic"
    energetic = "energetic"
    destructive = "destructive"
    gloomy = "gloomy"
    rejected = "rejected"
    melancholic = "melancholic"
    chill = "chill"
    lazy = "lazy"
    dreamy = "dreamy"


class ActivityCategory(str, Enum):
    food_snack = "food/snack"
    movie_show = "movie/tv_show"
    game = "game"
    physical_activity = "physical_activity"


class Activity(BaseModel):
    category: ActivityCategory
    name: str


class VibeIn(BaseModel):
    mood: Mood
    name: str
    spotify_id: str
    picture_url: str
    activities: List[Activity]


class VibeOut(VibeIn):
    id: str
    created_by: str

# -------- Fake Data ---------- #

class FakeVibeQueries:
    def get_one(self, vibe_id:str, account_data: dict):
        return {
            "mood": "productive",
            "name": "string",
            "spotify_id": "string",
            "picture_url": "string",
            "activities": [{"category": "food/snack", "name": "string"}],
            "id": vibe_id,
            "created_by": "user",
        }


# -------- Test ---------- #

def test_get_vibe():
    app.dependency_overrides[VibeQueries] = FakeVibeQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_account_data

    response =client.get("/api/vibes/644a9dd9c609f8a9d72edd17")

    assert response.status_code == 200
    assert response.json()["id"] == "644a9dd9c609f8a9d72edd17"
    assert response.json() == {
        "mood": "productive",
        "name": "string",
        "spotify_id": "string",
        "picture_url": "string",
        "activities": [{"category": "food/snack", "name": "string"}],
        "id": "644a9dd9c609f8a9d72edd17",
        "created_by": "user",
    }

    app.dependency_overrides = {}
