'use strict';

App.Controllers.LogoutController = ['$scope','$state', function ($scope,$state) {
  $scope.viewModel = new LogoutViewModel($state);
}];

function LogoutViewModel($state) {
  var chatRef = new Firebase('https://teachersangular.firebaseio.com');
  var auth = new FirebaseSimpleLogin(chatRef, function () { });
  auth.logout();
  $state.go('login');
}
