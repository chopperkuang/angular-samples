var app = angular.module('app', []);
app.controller('Controller', function Controller($scope, $http, Base64, Md5) {

    $scope.accessToken = "";

    $scope.buildAccessToken = function () {

        console.log("buildAccessToken start ...");
        console.log(Md5.encode("fsfdsafdsafsa"));

        var tokenConfig = {
            params:{client_id:'kuang', client_secret:'123', grant_type:'password', code:Base64.encode("marissa:koala1234"), sign: Md5.encode('marissakoalakuang123')},
            headers:{
                'Authorization':'Basic ' + Base64.encode("kuang:123")
            }
        };
        $http.post('http://localhost:9090/oauth/token', "", tokenConfig)
             .success(function (data, status, headers, config) {
                 $scope.accessToken = data;
                 console.log(data);
             }).error(function (data, status, headers, config) {
                 console.log(status);
             });
    };

    $scope.getPhotos = function() {
        var config = {
            headers:{
                'Authorization':'Bearer ' + $scope.accessToken.access_token
            }
        };
        $http.get('http://localhost:9090/photos', config)
            .success(function (data) {
                $scope.photos = data;
                console.log(data);
            });
    }

    $scope.refershToken = function() {
        var config = {
            params:{client_id:'kuang', client_secret:'123', grant_type:'refresh_token', refresh_token: $scope.accessToken.access_token},
            headers:{
                'Authorization':'Bearer ' + $scope.accessToken.access_token
            }
        };
        $http.get('http://localhost:9090/oauth/token', config)
            .success(function (data) {
                $scope.photos = data;
                console.log(data);
            });
    }

});
