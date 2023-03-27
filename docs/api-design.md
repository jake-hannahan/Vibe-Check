

### Login

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
    *username: string
    *password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
        "account": {
            <<key>>: type>>,
        },
        "token": string
    }
    ```

### Logout

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```

### Signup

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
    *email: string
    *username: string
    *password: string
    *confirm password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
        "account": {
            <<key>>: type>>,
        },
        "token": string
    }
    ```


### Post a new Vibe

* Endpoint path: /vibes
* Endpoint method: POST

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
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

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```

### Get vibes created by user (My Vibes)

* Endpoint path: /vibes/<str:username>/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    * None

* Response: A list of vibes created by user
* Response shape (JSON):
    ```json
    {
        "vibes": [
          {
            "mood": string,
            "created_by: string,
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

* Endpoint path: /vibes
* Endpoint method: GET
* Query parameters:
    * mood

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
  * None

* Response: A list of vibes
* Response shape (JSON):
    ```json
    {
        vibes": [
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

* Endpoint path: /vibes/<int:id>/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
  * None

* Response: One vibe
* Response shape (JSON):
  ``` json


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

* Endpoint path: /vibes/<int:id>/
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
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

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```


### Delete a vibe

* Endpoint path: /vibes/<int:id>/
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
  * None

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
        "success": boolean,
        "message": string
    }
    ```



### GET playlist using Spotify api

* Endpoint path: /vibes/<int:id>/<playlist_id>/
* Endpoint method: GET
* URL: https://api.spotify.com/v1/playlists/{playlist_id}/tracks
* Headers:
* Authorization: Bearer token


### GET playlist using Spotify api

* Endpoint path: /api/<playlist_id>/
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request shape (JSON):
    None

* Response: A Playlist's song names and artist names
* Response shape (JSON):
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
