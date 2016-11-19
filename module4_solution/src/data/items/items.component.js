(function() {
'use strict';

angular.module('data')
.component('items', {
  bindings: {
    items: '<',
  },
  controller: 'ItemsController',
  templateUrl: 'items.template.html',
});

})();
