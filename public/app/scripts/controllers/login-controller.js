'use strict';

App.Controllers.LoginController = ['$scope', '$state', 'LoginService', function ($scope, $state, loginService) {
  $scope.viewModel = new LoginViewModel($state, loginService);
}];


function LoginViewModel($state, loginService) {
  var self = this;

  this.isBusy = false;
  this.teachers = [];
  this.teacher = {};

  this.reset = function () {
    self.teacher = {};
  };

  this.loginTeacher = function () {
    self.isBusy = true;
    loginService.login(self.teacher, onLoginSuccess);
  };

  function onLoginSuccess(user) {
    $state.go('dashboard');
  };
}