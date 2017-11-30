
//-------------------------------------------------------//
// Constructor function for creating BasicCard objects
//-------------------------------------------------------//
var BasicCard = function(front, back) {
    if (this instanceof BasicCard){
  this.front = front;
  this.back = back;
    } else{
        return new BasicCard(front, back);
    }
};

//-------------------------------------------------------//
// Exporting the BasicCard constructor 
//-------------------------------------------------------//
module.exports = BasicCard;