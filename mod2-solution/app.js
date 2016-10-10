
(function(){
   'use strict';
   
   angular.module('ShoppingListCheckOff', [])
   .controller('ToBuyController', ToBuyController)
   .controller('AlreadyBoughtController', AlreadyBoughtController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
   
   ToBuyController.$inject = ['ShoppingListCheckOffService'];
   function ToBuyController(ShoppingListCheckOffService){
      var buyList = this;
      buyList.items = ShoppingListCheckOffService.getItemsToBuy();
      buyList.buyItem = function (index){
         ShoppingListCheckOffService.buyItem(index);
      }
   }
   
   AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();
      
      
   }
   
   //Implementing the service function
   function ShoppingListCheckOffService(){
      var service = this;
      // to Buy items
      var itemsToBuy = ["cookies", "crakers", "candies", "lolipops", "bubble gum"];
      
      // Already bought items
      var itemsBought = [];
      
      service.getItemsToBuy = function (){
         return itemsToBuy;
      }
      
      service.buyItem = function (index){
         var removed = itemsToBuy.splice(index, 1);
         itemsBought.push(removed[0]);
         if (itemsBought.length == 0){
            console.log("no hay items");
         }
      }
      
      service.getBoughtItems =  function (){
         return itemsBought;
      }
      
   }
   
})();