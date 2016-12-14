(function() {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'MenuApiPath'];
function MenuDataService($http, MenuApiPath) {
  var mdSrv = this;

  /*
    returns a promise containing categories
  */
  mdSrv.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: (MenuApiPath + 'categories.json')
    }).then(
      function(response) {
        return response.data;
      },
      function(error) {
        console.log('Getting all categories went wrong: ', error);
      }
    );
  };

  /*
    returns a promise containing dishes from the specified category
  */
  mdSrv.getItemsForCategory = function(catShortName) {
    return $http({
      method: 'GET',
      url: (MenuApiPath + 'menu_items.json?category=' + catShortName)
    }).then(
      function(response) {
        return response.data;
      },
      function(error) {
        console.log('Getting item categories went wrong: ', error);
      }
    );
  };
};

})();
