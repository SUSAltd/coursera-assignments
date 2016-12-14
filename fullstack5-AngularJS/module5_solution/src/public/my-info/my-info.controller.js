(function() {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo', 'menuItem', 'ApiPath'];
function MyInfoController(userInfo, menuItem, ApiPath) {
  var miCtrl = this;
  miCtrl.userInfo = userInfo;
  miCtrl.menuItem = menuItem;
  miCtrl.menuItemImg = ApiPath + '/images/' + menuItem.short_name + '.jpg';
}

})();
