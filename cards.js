"use strict";

// Create New Card //

function card (content, cardID, deleteID) {
    this.content = content,
    this.cardID = cardID,
    this.deleteID = deleteID
};

// Store new cards in an array

const storeCards = [];

// Print card to DOM //
let createCard = (userContent, cID, dID) => {
    console.log('creating card');
    let newCard = new card (userContent,cID, dID);
    storeCards.push(newCard);
    console.log(storeCards);
    let cardContent = '';
    cardContent += `<article id="${newCard.cardID}">`;
    cardContent += `<p>${newCard.content}</p>`;
    cardContent += `<button id="${newCard.deleteID}">Delete</button>`;
    cardContent += `</article>`;

    document.getElementById('contentContainer').innerHTML += cardContent;
    console.log('card created');
}

// Event Listener for actual user input

let createButton = document.getElementById('createContent');
createButton.addEventListener("click", function() {

    // Grab user content
    let userInput = document.getElementById('contentInput').value;

    // Generate cardIDs
    let cID = 'CID';
    let generateCardId = () => {
        let newValue = 1;
        cID += newValue;
        return cID;
    };

    generateCardId();
    console.log('new CID:', cID);

    // Generate delete IDs
    let dID = 'DID';
    let generateDeleteId = () => {
        let newValue = 1;
        dID += newValue;
        return dID;
    };

    generateDeleteId();
    console.log('new DID:', dID);

    //Create card
    createCard(userInput, cID, dID);
});

// Delete text from DOM