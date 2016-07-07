(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./js/controllers/mycontroller.js":2}],2:[function(require,module,exports){
module.exports = function (x) {
    x.controller('FriendController', function ($scope, $http) {
        $scope.trivia = {
          question:"",
          answer:"",
          category:"",
          difficulty:"",
          score:0,
          response:"",
          rightAnswer:"",
        }

        $scope.triviaQuestion = {
            question: 'Your question is...'
        };

        $scope.question = function () {
            console.log('question');
            console.log($scope.newSituation)
            // Make an AJAX request and update the scope.
            $http({
                method: 'GET',
                url: 'http://jservice.io/api/random',
            }).then(function (response) {
                let trivia = response.data[0];
                console.log($scope.trivia)
                $scope.newSituation = trivia.question;
            });
        };


        // $scope.flip();
    });
};

},{}]},{},[1])