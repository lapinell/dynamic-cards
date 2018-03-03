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
    // console.log('newValue:', newCidValue);
    return newCidValue;
};


// Generate delete IDs
let dIDvalue = 0;
let generateDeleteId = () => {
    let newDidValue = 'DID';
    dIDvalue += 1;
    newDidValue += dIDvalue.toString();
    // console.log('newValue:', newDidValue);
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

const storeCards = [];

/////////////////////////////////////////////////////

// Print card to DOM //
let createCard = (userContent, cID, dID) => {
    // console.log('creating card');
    let newCard = new card (userContent,cID, dID);
    storeCards.push(newCard);
   
    let cardContent = '';
    cardContent += `<article id="${newCard.cardID}">`;
    cardContent += `<p>${newCard.content}</p>`;
    cardContent += `<button id="${newCard.deleteID}">Delete</button>`;
    cardContent += `</article>`;

    document.getElementById('contentContainer').innerHTML += cardContent;
    // console.log('card created');

    return storeCards;
}

// I could create a function that loads all the cards in the array of objects, then prints them all but no - that would cause the entire cardContainer to reload everytime a new card was created or deleted.

console.log('stored cards:', storeCards);
// Event Listener for actual user input

let createButton = document.getElementById('createContent');
createButton.addEventListener("click", function() { buildCard(); console.log(storeCards); });

/////////////////////////////////////////////////////

// Delete text from DOM //

// Find delete button id

let cardContainer = document.getElementById('contentContainer');
console.log(cardContainer);

var config = { childList: true };

var callback = function(mutationsList) {
    console.log('mutationList:', mutationsList)
    for(var mutation of mutationsList) {
        console.log('mutation:', mutation);
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed');
            let deleteButton = document.getElementById('DID1'); //DID1 does not exist on page load, until it is created
            deleteButton.addEventListener("click", function() {
                console.log('deleteButton has been clicked');
            })
        }
    }
}

var observer = new MutationObserver(callback);

observer.observe(cardContainer, config);

// cardContainer.addEventListener('DOMNodeInsertedIntoDocument', function () { 
//     console.log('DOM changed'); 
//     console.log('inside EL', cardContainer);

//     let deleteButton = document.getElementById('DID1'); //DID1 does not exist on page load, until it is created
//     console.log('deleteButton', deleteButton);
// // Event listener for deletion of card

// deleteButton.addEventListener("click", function () { 
//     console.log('delete button was clicked');



// // Find associated card id

// let cardToDelete = document.getElementById('CID1');
// console.log('cardToDelete:', cardToDelete);

// // Delete card from array



// // Delete card from DOM

// let parentElement = cardToDelete.parentNode;
//     console.log('start', deleteButton);
//  parentElement.removeChild(cardToDelete); 
//     console.log('end');
// });

// });