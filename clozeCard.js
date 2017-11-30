// clozeCard.js

const replaceString = require('replace-string');


//-------------------------------------------------------//
// Constructor function for creating closeCard objects
//-------------------------------------------------------//
var ClozeCard = function (text, cloze) {
    this.fullText = text;
    this.clozeText = cloze;
}


//-------------------------------------------------------//
// prototype for partial text
//-------------------------------------------------------//
ClozeCard.prototype.partialText = function () {
    let textArray = this.fullText.split("");
    let textSplice = textArray.splice(this.fullText.indexOf(this.clozeText), this.clozeText.length);
    let textString = textSplice.join("");
    let partial = this.fullText.replace(textString, "\__________");
    return partial;
};



//-------------------------------------------------------//
// Exporting the BasicCard constructor 
//-------------------------------------------------------//
module.exports = ClozeCard;