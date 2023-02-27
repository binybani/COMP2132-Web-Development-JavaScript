/*
Take note of the comments throughout this page
Follow their directions as to what to code and where
*/

/*
PART 1a
---------------------------------------
DEFINE A Card OBJECT
---------------------------------------
*/

// Define the card class
class Card {
  // constructor function
  constructor(face, suit, value) {
    this.face = face;
    this.suit = suit;
    this.value = value;
  }
  // describe card object
  describeSelf() {
    // make the first letter in uppercase
    let returnString = `<p class="bold">${this.face} of ${this.suit}</p><p class="bold"> Value: ${this.value}</p>`;
    returnString += `<p><img src="img/card-images/${this.face}_of_${this.suit}s.svg" alt="${this.face} of ${this.suit}"></p>`;
    return returnString;
  }
}

// Instantiate card objects from the definition
const myCard = new Card("King", "Heart", 10);
// HTML Elements
const cardOutput = document.getElementById("cardOutput");
cardOutput.innerHTML += `<p>Before we build the full Deck of Cards, a single example, demonstration Card object has been created:</p>`;
cardOutput.innerHTML += myCard.describeSelf();

/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/

/*
PART 2a
---------------------------------------
DEFINE A Deck OBJECT
---------------------------------------
Note: Most of the Deck class code should
      not be modified in any way. The only
      Deck code that needs changing is inside the 
      constructor() function. Change nothing else in Deck. 
*/
class Deck {
  constructor() {
    //build a deck of Card objects
    //prepare arrays for all the aspects of a Card
    this.faces = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    this.values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    this.suits = ["Spade", "Club", "Heart", "Diamond"];

    //prepare an array to store the Cards in
    this.cards = [];

    //use nested 'for' loops
    //build the Deck of Cards
    //one iteration for each suit
    //one iteration for each face/value pair
    //each time, instantiate a new Card Object
    //add new cards to the using Array.push()
    let i, j;
    let facesArrayLength = this.faces.length;
    let suitsArrayLength = this.suits.length;
    for (i = facesArrayLength - 1; i >= 0; i--) {
      for (j = suitsArrayLength - 1; j >= 0; j--) {
        const addCard = new Card(this.faces[i], this.suits[j], this.values[i]);
        this.cards.push(addCard);
      }
    }
    console.log(this.cards);
  }
}

/*
DEFINING Deck OBJECT FUNCTIONS
no changes need to be made 
in the rest of this Deck class definition.
*/
Deck.prototype.dealCard = function () {
  //remove and return the first item in array
  //and shift the index of remaining items
  const card = this.cards.shift();
  //if we have run out of cards...
  if (card === undefined) {
    return "No more cards";
    console.log(card);
  } else {
    //return the next card in the array
    console.log(card);
    return card;
  }
};
Deck.prototype.shuffle = function () {
  let j, x, i;
  //loop through the entire array
  for (i = this.cards.length - 1; i > 0; i--) {
    //randomly select a card
    j = Math.floor(Math.random() * (i + 1));
    x = this.cards[i];
    //resort cards
    this.cards[i] = this.cards[j];
    this.cards[j] = x;
  }
  //return the randomly sorted array
  return this.cards;
};
Deck.prototype.describeSelf = function () {
  let description = "";
  description += `This deck of cards has ${this.cards.length} card(s) in it`;
  //return the above statement 'description'
  return description;
};
/*
---------------------------------------
end Deck class
---------------------------------------
*/

/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/

//invoke and display the Deck function describeSelf() here...
// Instantiate deck objects from the definition
const myDeckOfCards = new Deck();

// HTML Elements
const deckOutput = document.getElementById("deckOutput");
deckOutput.innerHTML += `<p>Instantiate a Deck Obiect and let it's constructor create 52 Card Obiects. Then shuffle) the Deck.</p>`;
deckOutput.innerHTML += `<p>Have the Deck describeSelfi() and dealCard(). Display the Card dealt. Again have the Deck describeSelf(),
  dealCard(), and display the next Card dealt.</p>`;
deckOutput.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//randomize the cards in the deck using shuffle()
myDeckOfCards.shuffle();

//take the first card from the deck using dealCard()
let drawCard = myDeckOfCards.dealCard();
deckOutput.innerHTML += `<p>You've been dealt a ${drawCard.describeSelf()}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
deckOutput.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//take the next card from the deck using dealCard()
drawCard = myDeckOfCards.dealCard();
deckOutput.innerHTML += `<p>You've been dealt a ${drawCard.describeSelf()}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
deckOutput.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

/*
PART 3a
---------------------------------------
DEFINE A Player OBJECT
---------------------------------------
*/
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  addCardToHand(aCard) {
    if (aCard instanceof Card || aCard instanceof Deck) {
      this.hand.push(aCard);
    }
  }
  describeSelf() {
    let playerString = ``;
    playerString += `<div class="playerInfo"><img class="playerImg" src="img/ppl-images/${this.name}.jpg" 
        alt="${this.name}">`;
    playerString += `<h2 class="playerName">${this.name.replace(
      /\b[a-z]/,
      (letter) => letter.toUpperCase()
    )}'s hand:</h2>`;
    playerString += `<ul class="cardsInfo">`;
    this.hand.forEach(function (card) {
      playerString += `<li>${card.describeSelf()}</li>`;
    });
    playerString += `</ul></div>`;

    return playerString;
  }
}

/*
PART 3b
Instantiate at least two Player OBJECTs
Instantiate a new Deck and shuffle() it
Deal five Cards to each Player
Display each players hand to the browser
*/
const janaPlayer = new Player("jana");
const janePlayer = new Player("jane");
const jimPlayer = new Player("Jim");

// HTML Elements
const playerOutput = document.getElementById("playerOutput");
playerOutput.innerHTML += `<p class="">Begin with instantiating a fresh new Deck Object and giving it a shuffle()</p>`;
// playerOutput.innerHTML += myCard.describeSelf();

// Instantiate deck objects from the definition
const playerDeckOfCards = new Deck();

//randomize the cards in the deck using shuffle()
playerDeckOfCards.shuffle();

//draw a card from the deck using dealCard() for everyone
//first
let drawPlayerCard = playerDeckOfCards.dealCard();
janaPlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
janePlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
jimPlayer.addCardToHand(drawPlayerCard);

//second
drawPlayerCard = playerDeckOfCards.dealCard();
janaPlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
janePlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
jimPlayer.addCardToHand(drawPlayerCard);

//third
drawPlayerCard = playerDeckOfCards.dealCard();
janaPlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
janePlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
jimPlayer.addCardToHand(drawPlayerCard);

//fourth
drawPlayerCard = playerDeckOfCards.dealCard();
janaPlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
janePlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
jimPlayer.addCardToHand(drawPlayerCard);

//fifth
drawPlayerCard = playerDeckOfCards.dealCard();
janaPlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
janePlayer.addCardToHand(drawPlayerCard);

drawPlayerCard = playerDeckOfCards.dealCard();
jimPlayer.addCardToHand(drawPlayerCard);

//invoke and display the Deck function describeSelf() AGAIN here...
playerOutput.innerHTML += `<p>${janaPlayer.describeSelf()}</p>`;
playerOutput.innerHTML += `<p>${janePlayer.describeSelf()}</p>`;
playerOutput.innerHTML += `<p>${jimPlayer.describeSelf()}</p>`;

//playerOutput.innerHTML += `<p>${playerDeckOfCards.describeSelf()}</p>`;
