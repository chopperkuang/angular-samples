var app = angular.module('app', ['app-mocks']);
app.controller('Controller', function Controller($scope, $http) {

    $scope.getPhotos = function() {
        $http.get("/photos").then(
            function(response) {
                $scope.photos = response.data;
            }
        );
    }

    $scope.addPhoto = function() {
        $http.post("/photos", $scope.name).then(
            function(response) {
                $scope.photos = response.data;
            }
        );
    }
});
