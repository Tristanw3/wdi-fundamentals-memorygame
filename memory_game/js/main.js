console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped queen");

var cardsTwo = cards[2];

cardsInPlay.push(cardsTwo);

console.log("User flipped a king");

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else {
        alert("Sorry, try again.");
    }
} 