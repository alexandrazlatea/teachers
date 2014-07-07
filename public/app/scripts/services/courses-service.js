App.Services.CoursesService = ['$http', function ($http) {

  this.getCoursesAsync = function (onSuccess, onError) {
    $http.get('https://teachersangular.firebaseio.com/courses.json').then(onSuccess, onError);
  };

  this.addCourseAsync = function (course, onSuccess, onError) {
    $http.post('https://teachersangular.firebaseio.com/courses/'+course.user_id+'.json', course).then(function(error) {
      if (error) {
        onError(error);
      } else {
        onSuccess();
      }
    });
  };
}]