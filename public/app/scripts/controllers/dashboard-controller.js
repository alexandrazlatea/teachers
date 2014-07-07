'use strict';

App.Controllers.DashboardController = ['$scope', 'DashboardService','ProfileService', '$state', function($scope, dashboardService, profileService, state) {
        $scope.viewModel = new DashboardViewModel(state,dashboardService, profileService);
    }];

function DashboardViewModel(state, dashboardService, profileService) {
    var self = this;
   
    var onGetCoursesSuccess = function(result) {
        self.isBusy = false;
        self.courses = [];
        var courses = result.data;
        angular.forEach(courses, function(value, key) {
            this.push(value);
        }, self.courses);
    };
    var onGetCoursesError = function(result) {
        self.isBusy = false;
    };
    var getCourses = function(id) {
        self.isBusy = true;
        dashboardService.getCoursesAsync(id,onGetCoursesSuccess, onGetCoursesError);
    };
    var getUserLogged = function() {
        profileService.getLoggedUser(onSuccess, onError);
    }
    function onSuccess(user) {
        if (user) {
            getCourses(user.id);
        }
    }
    
    function onError(error) {
        state.go('login');
    }

    var init = function() {
        getUserLogged();
    };
    init();
}