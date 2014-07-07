'use strict';

App.Controllers.CoursesController = ['$scope', '$http', 'CoursesService', 'ProfileService', function($scope, $http, coursesService, profileService) {
        $scope.viewModel = new CoursesProfileViewModel(coursesService, profileService);
    }];
function CoursesProfileViewModel(coursesService, profileService) {
    var self = this;
    this.course = {};
    var reset = function() {
        self.course = {};
    };

    var onGetCoursesSuccess = function(result) {
        self.isBusy = false;
        self.courses = [];
        var courses = result.data;
        angular.forEach(courses, function(value, key) {
            angular.forEach(value, function(valueObject, key) {
                self.courses.push(valueObject);
            });
        }, self.courses);
    };
    var onGetCoursesError = function(result) {
        self.isBusy = false;
    };
    var getCourses = function() {
        self.isBusy = true;
        coursesService.getCoursesAsync(onGetCoursesSuccess, onGetCoursesError);
    };

    profileService.getLoggedUser(onSuccess, onError);

    function onSuccess(user) {
        if (user) {
            self.course.user_id = user.id;
        }
    }

    function onError() {
        self.logged = false;
    }
    var onAddCourseSucces = function() {
        self.isBusy = false;
        getCourses();
    };

    var onAddCourseError = function(error) {
        self.isBusy = false;
    };
    this.addCourse = function() {
        self.isBusy = true;
        coursesService.addCourseAsync(self.course, onAddCourseSucces, onAddCourseError);
    };

    var init = function() {
        getCourses();
    };
    init();
}
