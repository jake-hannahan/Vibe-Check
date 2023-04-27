# Vibe Check

### Meet The Team

-   Alana Torrez -
-   Shaun Ragasa | sragasa97@gmail.com - [LinkedIn](https://www.linkedin.com/in/sragasa97/)
-   Jay Shastri | jayshastri20@gmail.com - [LinkedIn](https://www.linkedin.com/in/jay-shastri/)
-   Jake Hannahan | jakehannahan@gmail.com - [LinkedIn](https://www.linkedin.com/in/jakehannahan/)

## Design

### Description

-   **[Vibe]** | A **feeling.** A **sensation.** An **emotion.** An **experience.**

A community for exploring, creating, and sharing vibes with one another.

#### [Api Design](https://gitlab.com/vibe-check/module3-project-gamma/-/blob/main/docs/api-design.md)

#### [Wireframe Design](https://gitlab.com/vibe-check/module3-project-gamma/-/blob/main/docs/wireframe.png)

## Intended Market

##### Everyone that's down for a good vibe.

## Functionality

#### Users can:

-   Create an account to explore.
-   Explore vibes made by others.
    -   View vibe previews on Main and List Pages.
    -   Filter vibes by different moods.
    -   Listen to any vibe's playlist.
-   Create/Update/Delete a vibe.
    -   With a name, an image, a mood, activities, and a playlist.
-   See their vibes in My Vibes.

## Project Initialization

To vibe out on your local machine, follow these steps:

1. Clone the repository to your local machine.
1. CD into vibe-check in your terminal.
1. Create a .env file.
    - Windows command: `type nul > .env`
    - Mac command: `touch .env`
1. In that .env add `SIGNING_KEY = <any string>`
    - To get a 32-character key, open any docker container's terminal and run `openssl rand -hex 32`
1. Open Docker and run `docker volume create mongo-data` in you terminal.
1. Run `docker compose up` in your terminal.
1. View site at `localhost:3000`
1. Congratulations! You're a part of the vibes!
