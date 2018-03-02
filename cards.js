"use strict";

// Create New Card Content, Generate IDs //

function card (content, cardID, deleteID) {
    this.content = content,
    this.cardID = cardID,
    this.deleteID = deleteID
};

// Generate cardIDs
let cIDvalue = 0;
let generateCardId = () => {
    let newCidValue = 'CID';
    cIDvalue += 1;
    newCidValue += cIDvalue.toString();
    console.log('newValue:', newCidValue);
    return newCidValue;
};


// Generate delete IDs
let dIDvalue = 0;
let generateDeleteId = () => {
    let newDidValue = 'DID';
    dIDvalue += 1;
    newDidValue += dIDvalue.toString();
    console.log('newValue:', newDidValue);
    return newDidValue;
};


// Build Card
function buildCard () {

    // Grab user content
    let userInput = document.getElementById('contentInput').value; 

    //Create card
    createCard(userInput, generateCardId(), generateDeleteId());
}

// Store new cards in an array

const storeCards = [];

// Print card to DOM //
let createCard = (userContent, cID, dID) => {
    console.log('creating card');
    let newCard = new card (userContent,cID, dID);
    storeCards.push(newCard);
   
    let cardContent = '';
    cardContent += `<article id="${newCard.cardID}">`;
    cardContent += `<p>${newCard.content}</p>`;
    cardContent += `<button id="${newCard.deleteID}">Delete</button>`;
    cardContent += `</article>`;

    document.getElementById('contentContainer').innerHTML += cardContent;
    console.log('card created');

    return storeCards;
}

console.log('stored cards:', storeCards);
// Event Listener for actual user input

let createButton = document.getElementById('createContent');
createButton.addEventListener("click", function() { buildCard(); console.log(storeCards); });

// Check the last cID number

//// unstringify the CID and number

//// find the highest number

//// return the highest number

// Delete text from DOM