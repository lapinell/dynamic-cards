"use strict";

// Create New Card //

function card (content, cardID, deleteID) {
    this.content = content,
    this.cardID = cardID,
    this.deleteID = deleteID
};

// Generate cardIDs //

let generateCardId = () => {

};

// Generate delete IDs //

let generateDeleteId = () => {

};

// Add user content to card//

var newCard = new card('Card content says not much of anything', 'T-CID001', 'T-DID001');

console.log(newCard);

// Store new cards in an array //

// Print card to DOM //
let createCard = (userContent) => {
    let newCard = new card (userContent, 'T-CID001', 'T-DID001');
    let cardContent = '';
    cardContent += `<article id="${newCard.cardID}">`;
    cardContent += `<p>${newCard.content}</p>`;
    cardContent += `<button id="${newCard.deleteID}">Delete</button>`;
    cardContent += `</article>`;

    document.getElementById('contentContainer').innerHTML = cardContent;
}

createCard('Sample text for the card.');

// Delete text from DOM