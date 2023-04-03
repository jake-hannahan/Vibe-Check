from .client import Queries
from models import Playlist, PlaylistOut, Song
from .scripts import header
from requests import get
from bson import ObjectId
from typing import List
import json


def get_spotify_playlist(playlist_id):
    url = f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks?fields=items.track(name,artists(name))"
    response = get(url, headers=header)

    try:
        playlist = json.loads(response.content)
        return playlist
    except Exception as e:
        return {"message": "Error: ${e}"}


class SpotifyQueries(Queries):
    DB_NAME = "mongo"
    COLLECTION = "spotify"

    def create_playlist(
        self, name: str, spotify_id: str, account_data: dict
    ) -> PlaylistOut:
        try:
            data = get_spotify_playlist(spotify_id)

            songs = []
            for item in data["items"]:
                artist_name = item["track"]["artists"][0]["name"]
                song_name = item["track"]["name"]
                song = Song(artist=artist_name, song=song_name)

                songs.append(song)

            playlist = Playlist(name=name, spotify_id=spotify_id, songs=songs)
            playlist = playlist.dict()
            result = self.collection.insert_one(playlist)
            id = str(result.inserted_id)
            playlist["id"] = id
            del playlist["_id"]

            return PlaylistOut(**playlist)

        except Exception as e:
            return {"message": f"Error: ${e}"}

    def get_playlist(
        self, playlist_id: str, account_data: dict
    ) -> PlaylistOut:
        playlist = self.collection.find_one({"_id": ObjectId(playlist_id)})
        if playlist:
            playlist["id"] = str(playlist["_id"])
            return PlaylistOut(**playlist)
        else:
            return None

    def get_all_playlists(self, account_data: dict) -> List[PlaylistOut]:
        playlists = self.collection.find()
        result = []
        for playlist in playlists:
            playlist["id"] = str(playlist["_id"])
            result.append(PlaylistOut(**playlist))
        return result

    def delete_playlist(self, playlist_id: str, account_data: dict) -> bool:
        result = self.collection.delete_one({"_id": ObjectId(playlist_id)})
        return result.deleted_count > 0
