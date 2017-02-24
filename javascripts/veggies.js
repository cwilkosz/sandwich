console.log("SandwichMaker veggie");

 var SandwichMaker = (function(maker) {
   
   var veggiePrices= {"Lettuce":    1.00, 
                       "Tomato":    2.00, 
                       "Pickle":    3.00, 
                       "Peppers":   4.00};

   
   maker.addVeggiePrices = function(thisVeggie) {
     return veggiePrices[thisVeggie];
   };

   maker.getVeggiePrices = function () {
     return veggiePrices
   };

   return maker;
 })(SandwichMaker);
 console.log("veggies.js loaded ");