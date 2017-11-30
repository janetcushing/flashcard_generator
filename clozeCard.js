
//-------------------------------------------------------//
// Constructor function for creating closeCard objects
//-------------------------------------------------------//
var ClozeCard = function (text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;
    } else {
        return new ClozeCard(text, cloze);
    }
}

//-------------------------------------------------------//
// prototype for partial text
//-------------------------------------------------------//
ClozeCard.prototype.partial = function () {
    var partial = "";
    if (this.fullText.includes(this.cloze)) {
        let textArray = this.fullText.split("");
        let textSplice = textArray.splice(this.fullText.indexOf(this.cloze), this.cloze.length);
        let textString = textSplice.join("");
        partial = this.fullText.replace(textString, "\________");
    } else {
        partial = "This is not a legitimate cloze flashcard.  Try another."
    }
    return partial;
};


//-------------------------------------------------------//
// Exporting the BasicCard constructor 
//-------------------------------------------------------//
module.exports = ClozeCard;