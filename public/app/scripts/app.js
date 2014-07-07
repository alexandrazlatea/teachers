'use strict';

var app = angular.module('app', ['ui.router', 'ngResource']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');

  

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'views/sign-up.html',
    controller: 'SignUpController'
  });
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'views/log-in.html',
    controller: 'LoginController'
  });
   $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'views/dashboard.html',
    controller: 'DashboardController'
  });
   $stateProvider.state('logout', {
    url: '/logout',
    controller: 'LogoutController'
   });
    $stateProvider.state('courses', {
    url: '/courses',
    templateUrl: 'views/courses.html',
    controller: 'CoursesController'
  });
   $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'views/profile.html',
    controller: 'ProfileController'
  });
}]);

app.controller(App.Controllers);
app.service(App.Services);
app.factory(App.Factories);
app.directive(App.Directives);

app.constant('configuration', {
  apiUrl: '/angular/public/'
});