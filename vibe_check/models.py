from pydantic import BaseModel
from typing import List
from jwtdown_fastapi.authentication import Token
from enum import Enum

# ------------- Account Models ------------- #


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


# ------------- Vibe Models ------------- #


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
