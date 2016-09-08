
(function(){
   'use strict';
   
   angular.module('LunchCheck', [])
   
   .controller('LunchCheckerController', LunchCheckerController);
   
   LunchCheckerController.$inject = [$scope];
   
   function LunchCheckerController($scope){
      $scope.message = "";
      $scope.listOfDishes = ""; //later an array
      
      $scope.checkIfTooMuch = function(){
         if ($scope.listOfDishes == ""){
            $scope.message = "Please Enter Data First";
         }
      }
   }
})();