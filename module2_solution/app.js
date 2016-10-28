(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyList();

  toBuy.moveToBought = function(itemIndex) {
    ShoppingListCheckOffService.moveToBought(itemIndex);
    console.log(toBuy.items);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {
      name: 'ice cream',
      quantity: 100,
    },
    {
      name: 'orange juice',
      quantity: 12,
    },
    {
      name: 'chocolate',
      quantity: 23,
    },
    {
      name: 'fish',
      quantity: 2,
    },
    {
      name: 'strawberries',
      quantity: 15,
    },
  ];
  var boughtItems = [];

  service.moveToBought = function(itemIndex) {
    boughtItems.push(toBuyItems.splice(itemIndex, 1)[0]);
  };

  service.getToBuyList = function() {
    return toBuyItems;
  };

  service.getBoughtList = function() {
    return boughtItems;
  };
}

})();
