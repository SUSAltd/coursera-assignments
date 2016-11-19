(function() {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // Home view
  .state('homeView', {
    url: '/',
    templateUrl: 'home.template.html',
  })

  // Categories view
  .state('categoriesView', {
    url: '/categories',
    templateUrl: 'src/data/categories/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }],
    },
  })

  // Items view
  .state('itemsView', {
    url: '/categories/c/{shortName}',
    templateUrl: 'src/data/items/items.template.html',
    controller: 'ItemsController as itemCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        var test = MenuDataService.getItemsForCategory($stateParams.shortName);
        console.log(test);
        return test;
      }],
    },
  });
}

})();
