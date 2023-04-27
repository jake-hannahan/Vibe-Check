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
    productive = "Productive"
    adventurous = "Adventurous"
    confident = "Confident"
    romantic = "Romantic"
    energetic = "Energetic"
    destructive = "Destructive"
    gloomy = "Gloomy"
    rejected = "Rejected"
    melancholic = "Melancholic"
    chill = "Chill"
    lazy = "Lazy"
    dreamy = "Dreamy"


class ActivityCategory(str, Enum):
    food_snack = "Food or Snack"
    movie_show = "Movie or TV Series"
    game = "Game"
    physical_activity = "Physical Activity"


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
    def edit(self, vibe_id: str, params: VibeIn, account_data: dict):
        return {
            "mood": "Productive",
            "name": "string",
            "spotify_id": "string",
            "picture_url": "string",
            "activities": [{"category": "Food or Snack", "name": "string"}],
            "id": vibe_id,
            "created_by": "user",
        }


# -------- Test ---------- #


def test_update_vibe():
    app.dependency_overrides[VibeQueries] = FakeVibeQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_account_data

    response = client.put(
        "/api/vibes/644a9dd9c609f8a9d72edd17",
        json={
            "mood": "Productive",
            "name": "string",
            "spotify_id": "string",
            "picture_url": "string",
            "activities": [{"category": "Food or Snack", "name": "string"}],
            "id": "644a9dd9c609f8a9d72edd17",
            "created_by": "user",
        },
    )

    assert response.status_code == 200
    assert response.json()["id"] == "644a9dd9c609f8a9d72edd17"
    assert response.json() == {
        "mood": "Productive",
        "name": "string",
        "spotify_id": "string",
        "picture_url": "string",
        "activities": [{"category": "Food or Snack", "name": "string"}],
        "id": "644a9dd9c609f8a9d72edd17",
        "created_by": "user",
    }

    app.dependency_overrides = {}
