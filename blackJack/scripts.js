//
//Blackjack
//project from Mark Zaymota on pluralsight
//

let suits = ['Hearts', 'Clubs' 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'];

//creates a deck of cards
function createDeck () {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }
    return deck;
}

//gets the cards
function getNextCard() {
    return deck.shift();
}

//print cards
function getCardString (card) {
    return card.value + ' of ' + card.suit;
}

let deck = createDeck();


let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to blackjack!");

console.log("You are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));