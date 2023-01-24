# A day at the zoo

[Click here to see deployed game](http://github.com)

## Description
This is a zoo themed card game where the stronger animal wins.


## MVP
- 1v1 animal duels where the animal with an attack points higher than its opponent's health points wins. Both the player's and the computer's animals are being randomly chosen from an array of animals. The deck of cards (number of animals) is limited.

- Details of the duel will be visible in the combat logs.

- The game will end if the player/computer won 5 duels.

## Backlog
- The player will have a handful of animals and can select which one to send against the computer's animal. 
- Implement a dice that will be used for additional cards such as traps, baits, treats. The damage/healing will be calculated based on the number rolled.
- Create an array of adjectives (powerful, wise, etc.) that will be randomly chosen for each animal. For example: Powerful tiger, wise elephant. This will increase the replayability without adding new animals.
- Turns will be added.
- Energy will be added (based on the number of turns) and each card will have a cost.
- It will be possible to group cards and use them at once to attack another (more powerful) animal. For example: 3 monkeys can beat a hyena with their combined attack points.
- Board can have multiple animals (2x3 or 2x5)
- If the player/computer has no animal on the board, the player's/computer's health points will be attacked directly. 
- The game will end if the player/computer has no remaining health points or the deck is empty.

## Data structure
_List of classes and methods_
- Math.random()


## States y States Transitions
_List of states (views) of your game_


## Task
- Come up with the design and the layout of the game.
- Start page with a "start" button and instructions.
- Game page.
- "Game over" page with restart button.
- Create an array of cards.
- Create the board with two rows, one for your animal(s) and one for the computer's animal(s).
- Choose animals randomly with a press of a button.
- Make the animals duel with a press of another button.
- Details of the duel must be displayed.
- Make the health of the player/computer decrease if there is no animal on board.


## Links

- [Trello Link](https://trello.com/b/jSezAEhi/1st-project)
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/petrovanistvan/a-day-at-the-zoo)
- [Deployment Link](http://github.com)