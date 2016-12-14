(function() {
'use strict';

angular.module('data')
.component('categories', {
  bindings: {
    categories: '<',
  },
  controller: 'CategoriesController',
  templateUrl: 'categories.template.html',
});

})();
