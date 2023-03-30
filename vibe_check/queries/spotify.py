# from client import Queries
# from models import Playlist, Song
# from typing import List
# from bson import ObjectId
import scripts
from requests import get
import json


# class SpotifyQueries(Queries):
#     DB_NAME = "mongo"
#     COLLECTION = "spotify"



def get_spotify_playlist(playlist_id):
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks?fields=items.track(name,artists(name))"
    response = get(url, headers=scripts.header)
    
    try:
        playlist = json.loads(response.content)
        return playlist
    except Exception as e:
        return {"message": "Error: ${e}"}