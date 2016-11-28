(function() {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'UserPreferenceService'];
function SignupController(MenuService, UserPreferenceService) {
  var signupCtrl = this;
  signupCtrl.menuItem = true; // initialize to true so the "menu item not found doesn't show up

  signupCtrl.submitForm = function(shortName) {
    var data = MenuService.getMenuItem(signupCtrl.user.dish);
    data.then(function(response) {
      signupCtrl.menuItem = response;
      if (response) { // if a response was received
        UserPreferenceService.setUser(
          signupCtrl.user.fname,
          signupCtrl.user.lname,
          signupCtrl.user.email,
          signupCtrl.user.phone,
          signupCtrl.user.dish
        );
        signupCtrl.saved = true;
      }
    });
  };
}


})();
