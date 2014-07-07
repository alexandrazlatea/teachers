'use strict';

App.Controllers.SignUpController = ['$scope', '$state', 'SignUpService', function ($scope, $state, signUpService) {
  $scope.viewModel = new SignUpViewModel($state, signUpService);
}];

function SignUpViewModel($state, signUpService) {
  var self = this;

  var constraints = {
    firstName: {
      presence: true,
    },
    lastName: {
      presence: true,
    },
    email: {
      presence: true,
      email: true,
    }
  };

  this.isBusy = false;
  this.teachers = [];
  this.model = {};

  this.errors = [];

  this.reset = function () {
    this.model = {};
  };

  this.addTeacher = function (form) {
    this.errors = [];
    App.Helpers.validate(self, form, constraints, onAddTeacherSuccess);
  };

  function onAddTeacherSuccess() {
    self.isBusy = true;
    signUpService.addTeacher(self.model);
    $state.go('login');
    self.isBusy = false;
  }
}