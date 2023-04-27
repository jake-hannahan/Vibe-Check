# Vibe Check

### Meet the team

* Alana Torrez -
* Shaun Ragasa -
* Jay Shastri -
* Jake Hannahan - jakehannahan@gmail.com [linkedIn](https://www.linkedin.com/in/jakehannahan/)

## Design

### Description

* **Vibe**: A **feeling.** A **sensation.** An **emotion.** An **experience.**


A community for exploring, creating, and sharing vibes with one another.

#### [Api Design](https://gitlab.com/vibe-check/module3-project-gamma/-/blob/main/docs/api-design.md)

#### [Wireframe](https://gitlab.com/vibe-check/module3-project-gamma/-/blob/main/docs/wireframe.png)


## Intended Market
##### Everyone down for a good vibe

## Functionality
#### Users can:
* Create an account to explore.
* Explore vibes made by others.
    * View vibe previews on Main and List Pages.
    * Filter vibes by different moods.
    * Listen to any vibe's playlist.
* Create/Update/Delete a vibe.
    * With name, image, mood, activities, and a playlist.
* See their vibes My Vibes.

## Project Initialization
To vibe out on your local machine follow these steps.
1. Clone the repository to your local machine.
1. CD into vibe-check.
1. Create a .env
    * Windows command: `type nul > .env`
    * Mac command: `touch .env`
1. In that .env add `SIGNING_KEY = <any string>`
    * To get a 32-character key, open any docker container's terminal and run `openssl rand -hex 32`
1. Run `docker volume create mongo-data`
1. Run `docker compose up`
1. View site at `localhost:3000`
