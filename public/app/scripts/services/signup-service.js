App.Services.SignUpService = [function () {
  this.addTeacher = function (teacher) {
    var messagesRef = new Firebase('https://teachersangular.firebaseio.com/users/profile');
    
    var auth = new FirebaseSimpleLogin(messagesRef, function () { });

    auth.createUser(teacher.email, teacher.password, function (error, user) {
      if (!error) {
        teacher.userId = user.id;
        teacherFirebase = new Firebase('https://teachersangular.firebaseio.com/users/profile/'+user.id);
        teacherFirebase.push(teacher);
      }
    });
  };
}]