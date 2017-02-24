console.log("SandwichMaker condiment");
console.log("condiments.js loaded");

var SandwichMaker = (function(maker) {
   
   var condimentPrices= {"Ketchup": 1.00, 
                         "Spicy Mustard": 1.75, 
                         "Siruacha": 1.75, 
                         "Green Stuff": 3.50};

   
  maker.addCondimentPrices = function(thisCondiment) {
    return condimentPrices[thisCondiment];
   };

   maker.getCondimentPrices = function () {
     return condimentPrices
   };

   
   return maker;
 })(SandwichMaker);
 console.log("condiments.js loaded");
