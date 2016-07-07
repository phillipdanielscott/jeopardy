let app = angular.module('jeopardy',['ngRoute']);

//controllers
require('./js/controllers/mycontroller.js')(app);

app.config(['$routeProvider', function ($routeProvider) {
   $routeProvider
       .when('/', {
           redirectTo: '/login',
       })
       .when('/login', {
         controller: 'logincontroller',
         templateUrl: 'templates/login.html',
       })
       .when('/game', {
           controller: 'FriendController',
           templateUrl: 'templates/game.html',
       })
       .when('/gameover', {
           controller: 'overcontroller',
           templateUrl: 'templates/gameover.html',
       });
}]);
