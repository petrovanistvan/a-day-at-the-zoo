animals = [
    {
        name: "Bear",
        img: "../images/bear.png",
        attack: 7,
        defense: 14
    }, 
    {
        name: "Buffalo",
        img: "../images/buffalo.png",
        attack: 4,
        defense: 8
    },
    {
        name: "Chick",
        img: "../images/chick.png",
        attack: 1,
        defense: 2
    },
    {
        name: "Chicken",
        img: "../images/chicken.png",
        attack: 2,
        defense: 4
    },
    {
        name: "Cow",
        img: "../images/cow.png",
        attack: 5,
        defense: 10
    },
    {
        name: "Crocodile",
        img: "../images/crocodile.png",
        attack: 10,
        defense: 15
    }, 
    {
        name: "Dog",
        img: "../images/dog.png",
        attack: 3,
        defense: 6
    }, 
    {
        name: "Duck",
        img: "../images/duck.png",
        attack: 2,
        defense: 4
    },
    {
        name: "Elephant",
        img: "../images/elephant.png",
        attack: 20,
        defense: 30
    }, 
    {
        name: "Frog",
        img: "../images/frog.png",
        attack: 1,
        defense: 2
    }, 
    {
        name: "Giraffe",
        img: "../images/giraffe.png",
        attack: 9,
        defense: 18
    }, 
    {
        name: "Goat",
        img: "../images/goat.png",
        attack: 3,
        defense: 6
    }, 
    {
        name: "Gorilla",
        img: "../images/gorilla.png",
        attack: 12,
        defense: 24
    }, 
    {
        name: "Hippo",
        img: "../images/hippo.png",
        attack: 15,
        defense: 30
    },
    {
        name: "Horse",
        img: "../images/horse.png",
        attack: 6,
        defense: 12
    },
    {
        name: "Monkey",
        img: "../images/monkey.png",
        attack: 5,
        defense: 10
    }, 
    {
        name: "Moose",
        img: "../images/moose.png",
        attack: 7,
        defense: 14
    },
    {
        name: "Narwhal",
        img: "../images/narwhal.png",
        attack: 7,
        defense: 14
    }, 
    {
        name: "Owl",
        img: "../images/owl.png",
        attack: 1,
        defense: 2
    }, 
    {
        name: "Panda",
        img: "../images/panda.png",
        attack: 4,
        defense: 8
    },
    {
        name: "Parrot",
        img: "../images/parrot.png",
        attack: 1,
        defense: 2
    },
    {
        name: "Penguin",
        img: "../images/penguin.png",
        attack: 2,
        defense: 4
    }, 
    {
        name: "Pig",
        img: "../images/pig.png",
        attack: 3,
        defense: 6
    }, 
    {
        name: "Rabbit",
        img: "../images/rabbit.png",
        attack: 1,
        defense: 2
    },
    {
        name: "Rhino",
        img: "../images/rhino.png",
        attack: 10,
        defense: 15
    }, 
    {
        name: "Sloth",
        img: "../images/sloth.png",
        attack: 3,
        defense: 6
    },
    {
        name: "Snake",
        img: "../images/snake.png",
        attack: 4,
        defense: 8
    },
    {
        name: "Walrus",
        img: "../images/walrus.png",
        attack: 7,
        defense: 14
    },
    {
        name: "Whale",
        img: "../images/whale.png",
        attack: 20,
        defense: 30
    },
    {
        name: "Zebra",
        img: "../images/zebra.png",
        attack: 5,
        defense: 10
    }
];

function draw() {
    //pick random element from array
    let randomPlayerCard = animals[Math.floor(Math.random()*animals.length)];  
    let randomComputerCard = animals[Math.floor(Math.random()*animals.length)];

    //append IMG of random element (PLAYER)
    let playerBox = document.querySelector(".playerBox");
    let playerCardImage = document.createElement("img");
    playerCardImage.src = randomPlayerCard.img;
    playerBox.appendChild(playerCardImage);

    //append ATTACK of random element (PLAYER)
    let playerAttack = document.querySelector(".playerAttack");
    let playerCardAttack = document.createElement("div");
    playerCardAttack.innerText = randomPlayerCard.attack;
    playerAttack.appendChild(playerCardAttack);

    //append DEFENSE of random element (PLAYER)
    let playerStats = document.querySelector(".playerDefense");
    let playerCardDefense = document.createElement("div");
    playerCardDefense.innerText = randomPlayerCard.defense;
    playerStats.appendChild(playerCardDefense);

    //append IMG of random element (COMPUTER)
    let computerBox = document.querySelector(".computerBox");
    let computerCardImage = document.createElement("img");
    computerCardImage.src = randomComputerCard.img;
    computerBox.appendChild(computerCardImage);

    //append ATTACK of random element (COMPUTER)
    let computerAttack = document.querySelector(".computerAttack");
    let computerCardAttack = document.createElement("div");
    computerCardAttack.innerText = randomComputerCard.attack;
    computerAttack.appendChild(computerCardAttack);

    //append DEFENSE of random element (COMPUTER)
    let computerDefense = document.querySelector(".computerDefense");
    let computerCardDefense = document.createElement("div");
    computerCardDefense.innerText = randomComputerCard.defense;
    computerDefense.appendChild(computerCardDefense);

    console.log(randomPlayerCard);
    console.log(randomComputerCard);
}

function fight() {
    
}

document.querySelector(".draw").addEventListener("click", draw);
document.querySelector(".fight").addEventListener("click", fight);

let combatLogBox = document.querySelector(".combatLogBox");
let combatLog = document.createElement("div");
combatLog.innerText = "Combat Log";
combatLogBox.appendChild(combatLog);




