<!-- ACCOUNT ENDPOINTS -->

### Login

-   Endpoint path: /token
-   Endpoint method: POST

-   Request shape (form):
    *username: string
    *password: string

-   Response: Account information and a token
-   Response shape (JSON):
    ```json
    {
        "account": {
            <<key>>: <<type>>,
        },
        "token": string
    }
    ```

### Logout

-   Endpoint path: /token
-   Endpoint method: DELETE

-   Headers:

    -   Authorization: Bearer + token

-   Response: Always true
-   Response shape (JSON):
    ```json
    true
    ```

### Signup

-   Endpoint path: /token
-   Endpoint method: POST

-   Request shape (form):
    *email: string
    *username: string
    *password: string
    *confirm password: string

-   Response: Account information and a token
-   Response shape (JSON):
    ```json
    {
        "account": {
            <<key>>: <<type>>,
        },
        "token": string
    }
    ```

<!-- VIBE ENDPOINTS -->

### Post a new Vibe

-   Endpoint path: /vibes
-   Endpoint method: POST

-   Headers:

    -   Authorization: Bearer + token

-   Request shape (JSON):

    ```json
    {
        "vibes": [
          {
            "mood": string,
            "created_by": string,
            "name": string,
            "playlist_id": string,
            "picture_url": string,
            "activity": [
                {
                    "category": string,
                    "name": string
                },
                {
                    "category": string,
                    "name": string
                }
             ]
           }
        ]
    }
    ```

-   Response: An indication of success or failure
-   Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```

### Get vibes created by user (My Vibes)

-   Endpoint path: /vibes/<str:username>/
-   Endpoint method: GET

-   Headers:

    -   Authorization: Bearer + token

-   Request shape (JSON):

    -   None

-   Response: A list of vibes created by user
-   Response shape (JSON):
    ```json
    {
        "vibes": [
          {
            "mood": string,
            "created_by": string,
            "name": string,
            "playlist_id": string,
            "picture_url": string,
            "activity": [
                {
                    "category": string,
                    "name": string
                }
             ]
           }
        ]
    }
    ```

### All Vibes

-   Endpoint path: /vibes
-   Endpoint method: GET
-   Query parameters:

    -   mood

-   Headers:

    -   Authorization: Bearer + token

-   Request shape (JSON):

    -   None

-   Response: A list of vibes
-   Response shape (JSON):
    ```json
    {
        "vibes": [
          {
            "created_by": string,
            "mood": string,
            "name": string,
            "picture_url": string,
           }
        ]
    }
    ```

### Vibe Detail

-   Endpoint path: /vibes/<int:id>/
-   Endpoint method: GET

-   Headers:

    -   Authorization: Bearer + token

-   Request shape (JSON):

    -   None

-   Response: One vibe
-   Response shape (JSON):

    ```json


      {
          "vibes": [
            {
              "id": number,
              "created_by": string,
              "mood": string,
              "name": string,
              "playlist_id": string,
              "picture_url": string,
              "activity":
                  {
                      "category": string,
                      "name": string
                  }
             }
          ]
      }
    ```

### Update a Vibe

-   Endpoint path: /vibes/<int:id>/
-   Endpoint method: PUT

-   Headers:
-   Authorization: Bearer + token

-   Request shape (JSON):

    ```json (don't need all)
    {
        "vibes": [
          {
            "mood": string,
            "name": string,
            "playlist_id": string,
            "picture_url": string,
            "activity":
                {
                    "category": string,
                    "name": string
                }
           }
        ]
    }
    ```

-   Response: An indication of success or failure
-   Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```

### Delete a vibe

-   Endpoint path: /vibes/<int:id>/
-   Endpoint method: DELETE

-   Headers:
-   Authorization: Bearer + token

-   Request shape (JSON):
-   None

-   Response: An indication of success or failure
-   Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```

<!-- SPOTIFY ENDPOINTS -->

### GET playlist using Spotify api

-   Endpoint path: /api/<playlist_id>/
-   Endpoint method: GET
-   URL: https://api.spotify.com/v1/playlists/{playlist_id}/tracks
-   Headers:
-   Authorization: Bearer + token
<!-- Grabbing playlist data using the selected playlist ID that is linked to the vibe -->

*   Endpoint path: /vibes/<int:id>/playlist/
*   Endpoint method: GET
*   URL: https://api.spotify.com/v1/playlists/{playlist_id}/tracks
*   Headers:
    -   Authorization: Bearer + token

### GET playlist using Spotify api

<!-- Searching up playlist using Spotify API to add to vibe instance -->

-   Endpoint path: /api/<playlist_id>/
-   Endpoint method: GET
-   URL: https://api.spotify.com/v1/playlists/{playlist_id}/tracks
-
-   Headers:

    -   Authorization: Bearer + token

-   Request shape (JSON):
    None

-   Response: A Playlist's song names and artist names
-   Response shape (JSON):
    ```json
    {
     "items": [
        {
            "tracks": {
                "artists": [
                    {
                        "name": str
                    }
                ],
                "name": str
            }
        }
    ]
    }
    ```

### GET Spotify Token

from dotenv import load_dotenv
import os
import base64
from requests import post
import json

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")

"""
The Client Credentials flow is used in server-to-server authentication. Since this flow does not include authorization, only endpoints that do not access user information can be accessed.

User requests access token -> Spotify accounts service returns access token -> User requests to Web API with access token in request -> Spotify web API returns requested (unscoped) data

"""

def get_token():
auth_string = client_id + ":" + client_secret
auth_bytes = auth_string.encode("utf-8")
auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic " + auth_base64,
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {"grant_type": "client_credentials"}

    response = post(url, headers=headers, data=data)

    try:
        result = json.loads(response.content)
        token = result["access_token"]
        return token
    except Exception as e:
        return {"message": "Error: ${e}"}

def get_auth_header(token):
return {"Authorization": "Bearer " + token}

token = get_token()
