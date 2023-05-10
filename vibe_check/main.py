from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from authenticator import authenticator
from routers import accounts, vibes

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://vibe-check.gitlab.io/vibe-check",
    "https://vibe-check.gitlab.io",
    os.environ.get("CORS_HOST", None),
    os.environ.get("PUBLIC_URL", None),
    os.environ.get("REACT_APP_VIBE_CHECK_API_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(accounts.router, tags=["Accounts"])
app.include_router(authenticator.router, tags=["Accounts"])
app.include_router(vibes.router, tags=["Vibes"])
