
//-----------------------------------------------------------------//
// Requiring our BasicCard and ClozeCard constructor functions
//-----------------------------------------------------------------//
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");


//-----------------------------------------------------------------//
// create some example flashcards of both types, basic and cloze
//-----------------------------------------------------------------//
var footballBasic = new BasicCard("What is a football made out of?", "pigskin");
var footballCloze = new ClozeCard("A football is made out of pigskin.", "pigskin");

//-------------------------------------------//
// notice "new" is not used on this example
//-------------------------------------------//
var washingtonBasic =  BasicCard("Who was the first president of the United States?", "George Washington");
var washingtonCloze =  ClozeCard("George Washington was the first president of the United States.","George Washington");

var mtWashingtonBasic = new BasicCard("How tall is Mount Washington, in feet?", "6288");
var mtWashingtonCloze = new ClozeCard("Mount Washington is 6288 feet tall.","6288");

//-----------------------------------------------------------------//
// an example of a broken ClozeCard, ie the answer is not included 
// as part of the question so it is an improper ClozeCard and
// will write an error message
//-----------------------------------------------------------------//
var brokenCloze = new ClozeCard("This doesn\'t work","oops");


//-----------------------------------------------------------------//
// console.log the example flashcard questions and thier 
// corresponding answers
//-----------------------------------------------------------------//
console.log("\n");
console.log("=========================================");
console.log("\n");
console.log("-----------------------------------------");
console.log("Basic flashcard examples");
console.log("-----------------------------------------");
console.log(footballBasic.front);
console.log(footballBasic.back);
console.log("\n");
console.log(washingtonBasic.front);
console.log(washingtonBasic.back);
console.log("\n");
console.log(mtWashingtonBasic.front);
console.log(mtWashingtonBasic.back);
console.log("\n");

console.log("-----------------------------------------");
console.log("Cloze flashcard examples");
console.log("-----------------------------------------");
console.log(footballCloze.partial());
console.log(footballCloze.fullText);
console.log("\n");
console.log(washingtonCloze.partial());
console.log(washingtonCloze.fullText);
console.log("\n");
console.log(mtWashingtonCloze.partial());
console.log(mtWashingtonCloze.fullText);
console.log("\n");

console.log("-----------------------------------------");
console.log("Cloze flashcard example that errors out");
console.log("-----------------------------------------");
console.log(brokenCloze.partial());
console.log(brokenCloze.fullText);
console.log("\n");
console.log("=========================================");
console.log("\n");