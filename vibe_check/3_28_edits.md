1. Changed requirements to be specific version numbers, not >=
2. Shifted order of models.py
3. Authenticator: changed account to accountoutwithhashedpassword
4. ^ changed account to accountout
5. Made signing key more secure in docker-compose.yaml with .env file
6. Add route tag to main.py
7. Changed fastapi requirement version to 0.89.0
8. Added possible new signing_key using openssl rand -hex 32 method
9. A whole bunch of other stuff
10. In queries.accounts, changed db-name to vibes because reasons? Idk
