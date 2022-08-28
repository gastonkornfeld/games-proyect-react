

import React from 'react'

// this file is only creating the functions for a new deck


const SUITS = ['♣', '♥', '♠', '♦']
const VALUES = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
]

export default class DeckOfCards {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards - 1;  i >0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }

    pop() {
        return this.cards.shift();
    }

    deleteCard () {
        this.cards.pop()
    }

    push(card) {
        this.cards.push(card);
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    get color() {
        return this.suit === '♣' || this.suit === '♠' ? 'black': 'red';
    }

    getHtml() {
        const cardDiv = document.createElement('div ');
        cardDiv.innerHTML= this.suit;
        cardDiv.classList.add('card', this.color);
        cardDiv.dataset.value = `${this.value} ${this.suit}`;
        return cardDiv;
    }
}

// this function will create a new deck every time
function freshDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}











