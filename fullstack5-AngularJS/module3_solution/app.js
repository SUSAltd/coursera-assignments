(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.controller('FoundItemsDirectiveController', FoundItemsDirectiveController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirectiveController() {
  var fiCtrl = this;
}

function FoundItemsDirective() {
  var ddo = {
    bindToController: true,
    controller: 'FoundItemsDirectiveController',
    controllerAs: 'fiCtrl',
    scope: {
      items: '<',
      listIsEmpty: '<',
      onRemove: '&',
    },
    templateUrl: 'founditems.template.html',
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;
  narrowCtrl.found; // list of found items
  narrowCtrl.listIsEmpty = false; // initialize to false so message does not appear

  narrowCtrl.getMenuItems = function(searchTerm) {
    if (searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function(response) {
        if (response.length) {
          narrowCtrl.listIsEmpty = false;
        } else {
          narrowCtrl.listIsEmpty = true;
        }
        narrowCtrl.found = response;
      });
    } else {
      narrowCtrl.found = [];
      narrowCtrl.listIsEmpty = true;
    }
  };

  narrowCtrl.removeItem = function(index) {
    narrowCtrl.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var srv = this;

  srv.getMatchedMenuItems = function(searchTerm) {

    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',

    }).then(function(response) {
      var menuItems = response.data.menu_items;
      var matchedItems = [];

      for (var i = 0; i < menuItems.length; i++) {
        var item = menuItems[i];
        if (item.description.includes(searchTerm)) {
          matchedItems.push(item);
        }
      }

      return matchedItems;
    });
  };
}


})();
