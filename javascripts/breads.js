console.log("SandwichMaker breads ");

 var SandwichMaker = (function(maker) {
 
   var breadsPrices= {"Rhye":     1.00, 
                     "Wheat":    2.00, 
                     "White":    3.00, 
                     "Stale":    4.00};

   
   maker.addBreadPrices = function(thisBread) {
     return breadsPrices[thisBread];
   };

   maker.getBreadPrices = function () {
     return breadsPrices
   };

   
   return maker;
 })(SandwichMaker);
console.log(" breads.js loaded ");
