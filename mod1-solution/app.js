
(function(){
   'use strict';
   
   angular.module('LunchCheck', [])
   
   .controller('LunchCheckerController', LunchCheckerController);
   
   LunchCheckerController.$inject = ["$scope"];
   
   function LunchCheckerController($scope){
      $scope.message = "";
      $scope.listOfDishesString = "";
      $scope.listOfDishesArray = [];
      
      
      $scope.checkIfTooMuch = function(){
         var numberItems = 0;
         $scope.listOfDishesArray = $scope.listOfDishesString.split(",");
         $scope.listOfDishesArray.forEach(function(element, index, array){
            array[index] = element.trim();
            if (array[index] !== ""){
               numberItems++;
            }
         });
         if (numberItems === 0){
            $scope.message = "Please enter data first!";
         }
         else if (numberItems <= 3){
            $scope.message = "Enjoy!";
         }
         else{
            $scope.message = "Too much!";
         }
      };
   }
})();