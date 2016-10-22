(function() {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.textbox = ''; // initialize to empty

  $scope.displayMessage = function() {
    var foods = $scope.textbox.split(/ *,[ *,*]*/); // ignores "empty" list items

    if (isTooMuchFood(foods))
      $scope.message = 'Too much!';
    else
      $scope.message = 'Enjoy!';
  };

  function isTooMuchFood(foodItems) {
    return foodItems.length > 3;
  }
}

})();
