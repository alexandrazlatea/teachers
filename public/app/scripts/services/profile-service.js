App.Services.ProfileService = ['$http', function($http) {
        var self = this;
        var chatRef = new Firebase('https://teachersangular.firebaseio.com');

        this.getLoggedUser = function(onSuccess, onError) {
            new FirebaseSimpleLogin(chatRef, function(error, user) {
                if (user) {
                    onSuccess(user);
                }
                else {
                    onError();
                }
            });
        };

        this.getProfile = function(onSuccess, onError) {
            self.getLoggedUser(function(user) {
                $http.get('https://teachersangular.firebaseio.com/users/profile/' + user.id + '.json').then(onSuccess, onError);
            }, function(error) {

            });
        };

        this.updateProfile = function(profile, onSuccess, onError) {
            $http.put('https://teachersangular.firebaseio.com/users/profile/' + profile.userId + '/' + profile.key + '.json', profile).then(onSuccess, onError);
        }
    }]