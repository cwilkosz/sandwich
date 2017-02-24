console.log("SandwichMaker Meats");

 var SandwichMaker = (function(maker) {

   var meatPrices= {"ham": 1.00,
                    "beef": 2.00,
                    "spam": 3.00,
                    "chicken": 4.00};

  
   maker.addMeatPrices = function(thisMeat) {
     return meatPrices[thisMeat];
   };

   maker.getMeatPrices = function () {
     return meatPrices
   };

   
   return maker;
 })(SandwichMaker);
 console.log(" meats.js loaded ");