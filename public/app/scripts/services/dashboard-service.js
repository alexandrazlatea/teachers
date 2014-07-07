App.Services.DashboardService = ['$http', 'configuration', function ($http, configuration) {
     this.getCoursesAsync = function (id,onSuccess, onError) {
        $http.get('https://teachersangular.firebaseio.com/courses/'+id+'.json').then(onSuccess, onError);
     }; 
}]