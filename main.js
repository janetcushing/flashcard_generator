// main.js

// Requiring our CastMember constructor function we exported from castMember.js
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");


var footballBasic = new BasicCard("What is a football made out of?", "pigskin");
var footballCloze = new ClozeCard("A football is made out of pigskin.", "pigskin");

var washingtonBasic = new BasicCard("Who was the first president of the United States?", "George Washington");
var washingtonCloze = new ClozeCard("George Washington was the first president of the United States.","George Washington");

var mtWashingtonBasic = new BasicCard("How tall is Mount Washington, in feet?", "6288");
var mtWashingtonCloze = new ClozeCard("Mount Washington is 6288 feet tall.","6288");

var brokenCloze = new ClozeCard("This doesn\'t work","oops");


// console.log("basic: " + JSON.stringify(footballBasic, null, 2));
// console.log("cloze: " + JSON.stringify(footballCloze, null, 2));
// console.log("partialText: " + footballCloze.partialText());

console.log("Basic flashcard examples");
console.log(footballBasic.front);
console.log(footballBasic.back);
console.log("\n");
console.log(washingtonBasic.front);
console.log(washingtonBasic.back);
console.log("\n");
console.log(mtWashingtonBasic.front);
console.log(mtWashingtonBasic.back);
console.log("\n");

console.log("Cloze flashcard examples");
console.log(footballCloze.partialText());
console.log(footballCloze.fullText);
console.log("\n");
console.log(washingtonCloze.partialText());
console.log(washingtonCloze.fullText);
console.log("\n");
console.log(mtWashingtonCloze.partialText());
console.log(mtWashingtonCloze.fullText);
console.log("\n");

console.log("Cloze flashcard example that errors out");
console.log(brokenCloze.partialText());
console.log(brokenCloze.fullText);
console.log("\n");