console.log("SandwichMaker cheese ");


 var SandwichMaker = (function(maker) {
   
   var cheesePrices= {"American": 1.00, 
                     "Munster": 2.00, 
                     "Spicy": 3.00, 
                     "Mozz": 4.00};

   
   maker.addCheesePrices = function(thisCheese) {
     return cheesePrices[thisCheese];
   };

   maker.getCheesePrices = function () {
     return cheesePrices
   };

   
   return maker;
 })(SandwichMaker);
console.log(" cheese.js loaded ");