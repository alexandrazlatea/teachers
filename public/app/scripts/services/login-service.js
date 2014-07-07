App.Services.LoginService = ['$http', 'configuration', function($http, configuration) {
        this.isBusy = false;
        this.users = [];
        this.login = {};

  this.login = function(user,onLoginSuccess) {
    var chatRef = new Firebase('https://teachersangular.firebaseio.com');
    var auth = new FirebaseSimpleLogin(chatRef, function(error, registeredUser) {
      if (error) {
        // an error occurred while attempting login
        switch (error.code) {
        case 'INVALID_EMAIL':
        case 'INVALID_PASSWORD':
        default:
        }
      } else if (registeredUser) {
        onLoginSuccess(registeredUser);
      } 
    });
    auth.login('password', {
      email: user.email,
      password: user.password
    });
  };
}]