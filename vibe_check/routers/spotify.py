from authenticator import authenticator
from fastapi import APIRouter, Depends, HTTPException
from models import PlaylistOut
from queries.spotify import SpotifyQueries
from typing import List


router = APIRouter()


@router.post("/api/playlists", response_model=PlaylistOut)
def create_playlist(
    name: str,
    spotify_id: str,
    queries: SpotifyQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.create_playlist(spotify_id, account_data)


@router.get("/api/playlists/{playlist_id}", response_model=PlaylistOut)
async def get_playlist(
    playlist_id: str,
    queries: SpotifyQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    playlist = queries.get_playlist(playlist_id, account_data)
    if playlist is None:
        raise HTTPException(status_code=404, detail="Playlist not found")
    return playlist


@router.get("/api/playlists", response_model=List[PlaylistOut])
async def get_all_playlists(
    queries: SpotifyQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return queries.get_all_playlists(account_data)


@router.delete("/api/playlists/{playlist_id}")
async def delete_playlist(
    playlist_id: str,
    queries: SpotifyQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    playlist = queries.get_playlist(playlist_id, account_data)
    if playlist is None:
        raise HTTPException(status_code=404, detail="Playlist not found")
    return queries.delete_playlist(playlist_id, account_data)
