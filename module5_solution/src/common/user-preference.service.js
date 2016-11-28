(function() {
'use strict';

angular.module('common')
.service('UserPreferenceService', UserPreferenceService);

function UserPreferenceService() {
  var upSrv = this;

  var user;
  var userExists = false;

  upSrv.setUser = function(fname, lname, email, phone, dish) {
    user = {
      'fname': fname,
      'lname': lname,
      'email': email,
      'phone': phone,
      'dish': dish,
    };
    userExists = true;
  };

  upSrv.getUser = function() {
    return user;
  };

  upSrv.userExists = function() {
    return userExists;
  };

}

})();
