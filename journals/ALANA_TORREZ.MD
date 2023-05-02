> > [W13:D1] 20 March 2023 | Monday
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


> > [W13:D2] 21 March 2023 | Tuesday
Started wireframing.

> > [W13:D3] 22 March 2023 | Wednesday
Finished wireframing and started API documentation. Completed initial deloyment set up on Render.

> > [W13:D4] 23 March 2023 | Thursday
Talked about ubiquitous language and made some adjustments to our wireframes.

> > [W13:D5] 24 March 2023 | Friday
Decided to use MongoDB as our database and completed our code of conduct. Agreed to read up on authentication and integrating mongo with fastapi.

> > [W14:D1] 27 March 2023 | Monday
Hashed out final api design issues--met with Riley to ask about:
    1. How do we handle token expiration?
        a. logic is basically: if status code = expired, go get new token
    2. How do we handle populating our finite list of moods?
        a. use pydantic enum , no table, just a list
We then started on our authentication process.

> > [W14:D2] 28 March 2023 | Tuesday
Consulted Riley about enum usage for ActivityCategory and Mood. He mentioned that the get request for all moods would loop through all moods.

> > [W14:D3] 29 March 2023 | Wednesday
Finished all routers and queries except our Spotify ones.

> > [W14:D4] 30 March 2023 | Thursday
Started setting up Spotify routes

> > [W15:D1] 03 April 2023 | Monday
Finished setting up Spotify backend routers/queries.

> > [W15:D2] 03 April 2023 | Tuesday
Started with redux auth.

> > [W15:D3] 04 April 2023 | Wednesday
Finished login, logout, started signup.

> > [W15:D3] 05 April 2023 | Thursday
Finished signup, set up router page, added links for front-end auth. Started on main page.

> > [W16:D1] 17 April 2023 | Monday
Wrote issues for projects features. Modified backend to make sure spotify and vibe creation were linked.

> > [W16:D2] 18 April 2023 | Tuesday
Tested backend functions some more. Started on my vibe component card. Assigned components to each team member.

> > [W16:D3] 19 April 2023 | Wednesday
Got started on building out listcard component and listvibes page.

> > [W17:D4] 20 April 2023 | Thursday
Continued with building out components assigned to me. Shaun peer coded with me so I could move past some blockers.

> > [W18:D1] 24 April 2023 | Monday
Worked on formatting the card component that gets passed into the vibes List.

> > [W18:D2] 25 April 2023 | Tuesday
Added drop down options to the vibes list page so that users can select vibes by mood.

> > [W18:D3] 26 April 2023 | Wednesday
Struggled with formatting list cards in card component so that they look uniform.

> > [W18:D4] 27 April 2023 | Thursday
Scrapped the card component and list card tailwind and modified code being used in other cards.

> > [W18:D5] 28 April 2023 | Friday
Finalized mvp styling and formatting for list card and list vibes.


Test test test
Test test test agaaaainnnnnnn
