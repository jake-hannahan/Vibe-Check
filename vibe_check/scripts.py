import os
import base64
from requests import post
import json


signing_key = os.environ["SIGNING_KEY"]
client_id = os.environ["CLIENT_ID"]
client_secret = os.environ["CLIENT_SECRET"]


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