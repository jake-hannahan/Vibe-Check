Development Journal

> > [W13:D1] 20 March 2023 | Monday
> > Brainstormed app ideas with team. We decided on a Vibe Check app where users associate a specific vibe to a mood, activities, and a spotify playlist.

> > [W13:D2] 21 March 2023 | Tuesday
> > Began wireframing.

> > [W13:D3] 22 March 2023 | Wednesday
> > Continued working on wireframing as well as API design. Created our team's gitlab repo.

> > [W13:D4] 23 March 2023 | Thursday
> > Continued working on wireframing as well as API design.

> > [W14:D1] 27 March 2023 | Monday
> > Worked on user authentication.

> > [W14:D2] 28 March 2023 | Tuesday
> > Finished Backend authentication. Started working on vibes.py in routers and queries.

> > [W14:D3] 29 March 2023 | Wednesday
> > Finished vibes.py in routers and queries.

> > [W14:D4] 30 March 2023 | Thursday
> > Added to our environment variables in .env. Completed spotify.py in routers and queries. Also scripts.py in queries which returns a bearer token so we can make calls to the spotify api.

> > [W15:D1] 3 April 2023 | Monday
> > Finished backend for our MVP.

> > [W15:D2] 4 April 2023 | Tuesday
> > Installed Tailwind and Redux for our frontend, can see them under dependencies in package.json. Began working on frontend authentication pages, login, logout, and signup.

> > [W15:D3] 5 April 2023 | Wednesday
> > Finished our login, logout, and signup components for frontend authentication.

> > [W15:D4] 6 April 2023 | Thursday
> > Added to signup compenent. Installed react-router-dom to use in our frontend. Set up routes in App.jsx. Worked on a navbar component in Nav.js. Started on our mainpage component called Mainpage.jsx.

> > [W15:D5] 7 April 2023 | Friday
> > Mapped out all of our componenets on excalidraw. We will do pair programming when we return from break. During break all members are researching color themes, fonts, and overall styling for our vibe check application.

> > [W16:D1] 17 April 2023 | Monday
> > Ran Flake8 on our code and cleaned it up. We changed our create a vibe so it creates a playlist, grabs that playlist id, places it into our vibe, and then creates the vibe.

> > [W16:D2] 18 April 2023 | Tuesday
> > Team coding, created a CarouselCard.jsx component to use on our mainpage. Created a SongList.jsx component to use in our MyVibeCard.jsx and VibeDetailPage.jsx. Then we mapped out the work to complete as a team on excalidraw.

> > [W16:D3] 19 April 2023 | Wednesday
> > I worked on CreateVibeForm.jsx which needed newVibeSlice.js in order to use and update redux state with data for a new vibe. Added an API endpoint to create a vibe from our frontend.

> > [W16:D4] 20 April 2023 | Thursday
> > Finished up CreateVibeForm.jsx. A user can no longer remove an activity if there is only one. Finished EditVibeForm.jsx and added an API endpoint to update a vibe from our frontend. Added Craft a vibe to our navbar.

> > [W17:D1] 24 April 2023 | Monday
> > Added carousel to MainPage.jsx that uses the CarouselCard.jsx component to populate it. Created a counterSlice.jsx to increment or set value that ranges from 0-11 and those correlate with our 12 different moods. Need this in order to update the carousel when a user clicks on a mood or when a user clicks the arrow button on the carousel. Added background color to carousel and CarouselCards.jsx and those background colors change with each mood.

> > [W17:D2] 25 April 2023 | Tuesday
> > Modified Mainpage.jsx and CarouselCard.jsx styling. Created a routing folder with ProtectedRoute.js that deals with frontend auth. A user who is not logged in can only access login and signup pages. Changed the navbar the be different for a logged in user vs a logged in user. Added link from login to signup and from signup to login. Added dependencies to my useEffect calls to get rid of errors.
