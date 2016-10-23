(function() {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.textbox = ''; // initialize to empty

  /*
    Displays message in the little message place
  */
  $scope.displayMessage = function() {
    var foods = getFoods();
    console.log(foods);
    if (foods.length == 0) {
      $scope.message = 'Please enter data first';
      $scope.messageClass = 'error';
    } else {
      $scope.messageClass = 'no-error';
      if (isTooMuchFood(foods))
        $scope.message = 'Too much!';
      else
        $scope.message = 'Enjoy!';
    }
  };

  /*
    Returns an array of foods parsed from the input box
  */
  function getFoods() {
    var result = $scope.textbox.split(/ *,[ *,*]*/); // ignores "empty" list items

    // takes care of case where the list starts and/or ends with ','
    if (result[0] == '')
      result = result.slice(1);
    if (result[result.length - 1] == '')
      result = result.slice(0, -1);

    return result;
  }

  /*
    Returns true if there is too much food, false otherwise
  */
  function isTooMuchFood(foodItems) {
    return foodItems.length > 3;
  }

}

})();
