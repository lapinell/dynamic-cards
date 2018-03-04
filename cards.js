"use strict";

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });

// Create New Card Content, Generate IDs //

function card (content, cardID, deleteButton) {
    this.content = content,
    this.cardID = cardID,
    this.deleteButton = deleteButton
};

// Generate cardIDs
let cIDvalue = 0;
let generateCardId = () => {
    let newCidValue = 'CID';
    cIDvalue += 1;
    newCidValue += cIDvalue.toString();
    return newCidValue;
};


// Generate delete IDs
let dIDvalue = 0;
let generateDeleteId = () => {
    let newDidValue = 'DID';
    dIDvalue += 1;
    newDidValue += dIDvalue.toString();
    return newDidValue;
};

/////////////////////////////////////////////////////

// Build Card //

function buildCard () {

    // Grab user content
    let userInput = document.getElementById('contentInput').value; 

    //Create card
    createCard(userInput, generateCardId(), generateDeleteId());
}

// Store new cards in an array

// const storeCards = [];

/////////////////////////////////////////////////////

// Print card to DOM //
let createCard = (userContent, cID, dID) => {
    // console.log('creating card');
    let newCard = new card (userContent,cID, dID);
    // storeCards.push(newCard);
   
    let cardContent = '';
    cardContent += `<article class="grid-item" id="${newCard.cardID}">`;
    cardContent += `<p>${newCard.content}</p>`;
    cardContent += `<button class="deleteButton" id="${newCard.deleteButton}">Delete</button>`;
    cardContent += `</article>`;

    document.getElementById('contentContainer').innerHTML += cardContent;

}

// Event Listener for actual user input

let createButton = document.getElementById('createContent');
createButton.addEventListener("click", function() {
    buildCard(); 
 });

/////////////////////////////////////////////////////

// Delete text from DOM //

let cardContainer = document.getElementById('contentContainer');

cardContainer.addEventListener("click", removeCard);

function removeCard () {
    if (event.target.className === "deleteButton") {

        let deleteButton= event.target;

        // // Find associated card

        let cardToDelete = deleteButton.parentNode;
        
         // // Delete card from DOM
        
         cardContainer.removeChild(cardToDelete); 
    }
};

