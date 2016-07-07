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

        $scope.checkAnswer = function() {
             console.log('Right or Wrong?');
             $scope.correctAnswer = $scope.trivia.answer
             if ($scope.inputVal === $scope.trivia.answer) {
                 console.log('GOT EM');
                 let pointsUp = Number($scope.trivia.value + $scope.points)
                 $scope.points = pointsUp
             } else {
                 console.log('BOOOOOOOOO');
                 let pointsDown = Number($scope.points - $scope.theQuestion.value)
                 $scope.points = pointsDown
        // $scope.flip();
    });
};
