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
    playlist_id: str
    picture_url: str
    activities: List[Activity]


class VibeOut(VibeIn):
    id: str
    created_by: str


class Song(BaseModel):
    artist: str
    song: str


class Playlist(BaseModel):
    name: str
    spotify_id: str
    songs: List[Song]


class PlaylistOut(Playlist):
    id: str
