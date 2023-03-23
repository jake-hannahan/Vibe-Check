Day 1:
Decided on a project (Vibe Check!) and got some advice on scope from Riley.
Vibe Check allows users to create 'vibes' that are grouped by moods.
Here are the actions users can take in the MVP:

1. Create a vibe (POST, saves to All Vibes, My Vibes?):
    a. Select a mood (drop down?)--required
    b. Name the vibe.--required
    c. Select a playlist (the user will upload a Spotify playlist--this will connect to the Spotify api)--required
    d. Select an activity category and name the activity.
    e. upload a pic--not required?

2. List all vibes (GET all, request made from main page and goes to list view):
    a. each card displays vibe name, creator, picture, playlist name, activities

3. List my vibes (GET by userid/username):
    a. each card displays vibe name, activity, activity name, playlist name and songs list?

4. Delete a vibe (DELETE by vibe id)
    a. deletes from all vibes

5. Update a vibe (PUT, accessed from My Vibes):
    a. A form that allows the user to update the fields found in the Create a Vibe form


5. See vibe details (GET by vibe id, links from My Vibes, Main, List Vibes?)
    a. each page displays vibe name, picture, creator name, mood, playlist name and songs list

6. Login (POST, not sure I totally understand how this works):
    a. Form with username and password fields. Link to sign up page.

7. Logout (DELETE, I think it deletes the session token?)

8. Sign up (POST):
    a. Form with email, username, password, password confirmation fields, plus a join button and link to sign in.



Day 2:
Started wireframing.

Day 3:
Finished wireframing and started API documentation. Completed initial deloyment set up on Render.
