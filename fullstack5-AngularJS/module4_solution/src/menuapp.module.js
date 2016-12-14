(function() {
'use strict';

angular.module('MenuApp', ['ui.router', 'data'])
.controller('TestController', TestController);

TestController.$inject = ['$rootScope'];
function TestController($rootScope) {
  $rootScope.$on('$stateChangeError',
  function(event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });
}

})();
