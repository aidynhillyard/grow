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
| Create React app and files for all components | H | 2 | 2 |
| Basic Navbar & Footer | H | 2 | 1 |
| Set up basic React routing | H | 1 | 0.5 |
| Game logic for growing plants | H | 8 | 8 |
| Game logic for talking to townspeople | H | 8 | 8 |
| Game tutorial for how to play | H | 6 | 3 |
| Write dialogue and letter contents | M | 8 | 5 |
| Displaying menus/dialogue | H | 6 | 8 |
| CSS for GROW page | H | 6 | 6 |
| CSS for About page | H | 2 | 2 |
| Add home library feature | L | 8 | 2 |
| Total | H | 57 | 45.5 |

## Additional Libraries
React Bootstrap

## Citations of Outside Sources

### Case 1: Incrementing and Decrementing State

To increment and decrement a numeric state, I used this guide from Dave Ceddia: [link](https://daveceddia.com/usestate-hook-examples/)

### Case 2: Text Fade-In

To fade in my dialogue text, I used this guide from Geeks For Geeks: [link](https://www.geeksforgeeks.org/how-to-create-fade-in-effect-on-page-load-using-css/)

### Case 3: Remove Focus Color from React Bootstrap Dropdown

To remove the light blue focus color from the React Bootstrap Dropdown, I followed this guide from Stack Overflow: [link](https://stackoverflow.com/questions/48685197/react-how-to-remove-button-focus-outline-from-react-bootstrap-component)