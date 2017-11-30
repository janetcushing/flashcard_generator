// basicCard.js

//-------------------------------------------------------//
// Constructor function for creating BasicCard objects
//-------------------------------------------------------//
var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;

//   // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
//   this.addCastMember = function(g, n, r) {
//     this.cast.push(new CastMember(g, n, r));
//   };
};

//-------------------------------------------------------//
// Exporting the BasicCard constructor 
//-------------------------------------------------------//
module.exports = BasicCard;