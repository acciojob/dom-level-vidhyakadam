//your JS code here. If required.
// Find the element with the id "level"
const targetElement = document.getElementById('level');

// Initialize a variable to keep track of the DOM level
let domLevel = 0;

// Traverse up the DOM tree and count the levels
let currentNode = targetElement;
while (currentNode !== null) {
    domLevel++;
    currentNode = currentNode.parentNode;
}

// Display the DOM level using the alert() function
alert(`The level of the element is: ${domLevel}`);
