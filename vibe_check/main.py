from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, vibes, spotify

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(accounts.router, tags=["Accounts"])
app.include_router(authenticator.router, tags=["Accounts"])
app.include_router(vibes.router, tags=["Vibes"])
app.include_router(spotify.router, tags=["Playlists"])
