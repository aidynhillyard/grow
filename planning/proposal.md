# Project Overview

## Project Link

- Not yet deployed

## Project Description

This project is a short text-based role-playing game (rpg) where the player grows plants and trades them to townspeople for mysterious letters. The player plays as a person who has recently recovered from an accident, but they still have some memory loss and are now using a wheelchair permanently. The player pieces together information about their past and possible dreams for their future through the mysterious letters.

## User Story

The user is a person who enjoys self-paced, story-focused games, such as "slice of life" environments.  The user also enjoys learning more about other communities and identities, as the game aims to challenge assumptions about disabilities.

## Wireframes

- [Wireframe: Mobile & Tablet](https://i.imgur.com/PuRamHg.jpg)
- [Wireframe: Desktop](https://i.imgur.com/JVQDDKn.jpg)
- [React Architecture](https://i.imgur.com/cHMezac.jpg)


### MVP/PostMVP

#### MVP

- Django back end for full user auth
- Fully functional text-based game
    - Player spents action points (4 given per day) to plant seeds, care for plants, and talk to townspeople
    - Player must talk to townspeople to determine who likes which plant
    - Players can then trade that plant to that townsperson in exchange for a letter
    - Conversations with townspeople and the letters move along the plot
    - Game ends when player has traded with each townsperson to receive all the total letters
- Scope of plants, townspeople, and letters
    - 3 different types of plants (marigolds, snapdragons, and sunflowers)
    - 3 different townspeople
    - 3 total letters
- Action Points
    - 4 Action Points per day; points reset each day
    - Activities that consume Action Points are: 1. planting a seed, 2. caring for a plant, 3. talking to a townsperson
    - Examining plants and traveling to town do not consume Action Points
- Setting
    - Two settings: home and town
    - Traveling between them means changing menus (everything is text-based)
    - Background image of menu/dialogue box will change depending on setting (e.g., cobblestones for town setting, plants for home setting)

#### PostMVP

- Add "Home Library" feature where player can spend an Action Point to read a book in their home library
    - Choosing this option opens a menu with names of different books
    - Choosing a book provides a short quote in the menu box that the player can read
    - Purpose is to: 1. add depth to the game, 2. provide additional ways to spend Action Points, 3. provide more plot via books that can shed light on character's past
- Increase number of plants, townspeople, and letters
- Read-only journal feature that tracks highlights of game (e.g., keeping track of which townsperson likes which plant once the player discovers this)
- Additional route for Info that would contain more information about any books in the home library and maybe a link to the "1001 Desires Test" explanation

## Components

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Routes for content |
| GROW | Renders the game |
| About | Renders info about Aidyn, including links to Portfolio et al. |
| Info | Renders additional information about books in the home library, link to "1001 Desires Test" explanation (Post MVP) |


Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Create React app and files for all components | H | 2 | |
| Basic Navbar & Footer | H | 2 | |
| Set up basic React routing | H | 1 | |
| Game logic for growing plants | H | 8 | |
| Game logic for talking to townspeople | H | 8 | |
| Game tutorial for how to play | H | 6 | |
| Write dialogue and letter contents | M | 8 | |
| Displaying menus/dialogue | H | 6 | |
| CSS for GROW page | H | 6 | |
| CSS for About page | H | 2 | |
| Create "Info" page with more info | L | 4 | |
| Add home library feature | L | 8 | |
| Add read-only journal feature | L | 10 | |
| Total | H | 71 | |

## Additional Libraries
React Bootstrap

## Citations of Outside Sources
TBD

## Code Snippet

Here are some brief code snippets of functionality that I'm proud of and a brief description.

TBD