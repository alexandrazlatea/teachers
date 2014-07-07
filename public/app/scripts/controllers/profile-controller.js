'use strict';

App.Controllers.ProfileController = ['$scope', '$http', 'ProfileService', function($scope, $http, profileService) {
        $scope.viewModel = new ProfileViewModel(profileService);
    }];

function ProfileViewModel(profileService) {
    var self = this;

    this.isBusy = false;
    this.profile = {};

    function init() {
        profileService.getProfile(onSucces, onError);
    };

    function onSucces(result) {
        var key = Object.keys(result.data)[0];
        self.profile = result.data[key];
        self.profile.key = key;
    };

    function onError(error) {
        console.log(error);
    };
    var onUpdateProfileSuccess = function() {
    }
    var onUpdateProfileError;

    this.updateProfile = function() {
        profileService.updateProfile(self.profile, onUpdateProfileSuccess, onUpdateProfileError);
    }

    init();
}
