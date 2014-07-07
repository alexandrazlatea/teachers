'use strict';

App.Controllers.MenuController = ['$scope', 'ProfileService', function ($scope,profileService) {
   $scope.menuViewModel = new MenuViewModel(profileService);
}];

function MenuViewModel(profileService) {
  var self = this;
  this.logged = true;

  function init() {
    profileService.getLoggedUser(onSuccess,onError);
  }

  function onSuccess(user) {
    if (user) {
      self.logged = true;
    } else {
      self.logged = false;
    }
  }

  function onError() {
    self.logged = false;
  }
  init();
}