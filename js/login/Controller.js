var app = angular.module('app', []);
app.controller('LoginController', function LoginController($scope, Person){

    if (!Person.username) {
        $scope.status = 'login fail.';
    } else {
        $scope.status = 'login ok.';
    }

    $scope.login = function() {
        if($scope.person.username == "kk" && $scope.person.password == "kk") {
            Person.username = "kk";
            $scope.status = "login ok ..";
        } else {
            Person.username = "";
            $scope.status = "login fail ..";
        }
        console.log($scope.person);
    }
});