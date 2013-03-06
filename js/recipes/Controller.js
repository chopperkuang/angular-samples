var recipeApp = angular.module('recipeApp', []);
recipeApp.controller('RecipeController', function RecipeController($scope, $http) {

    $scope.recipes = [
        {title: '牛奶红豆沙', img: 'http://s3.stooory.com/static/recipe/3/1361600700_28085_m.1361601033.jpg'},
        {title: '榨菜牛肉碎汤', img: 'http://s2.stooory.com/static/recipe/3/1359686214_16998_m.1359687383.jpg'},
        {title: '果干面包', img: 'http://s3.stooory.com/static/recipe/3/1359846141_8038_m.1359846502.jpg'}
    ];



    $scope.addRecipe = function(len){
//        $http.defaults.headers.common['Authorization'] = ' bearer d12df999-4e9f-4e72-b95a-fe56a683ab5e';
//        $http.defaults.headers.common['Access-Control-Request-Headers'] = ' bearer d12df999-4e9f-4e72-b95a-fe56a683ab5e';
//        console.log($http.defaults.headers);
        console.log("addRecipe");

        var tokenConfig = {
            params:{grant_type:'password', username:'marissa', password:'koala'},
            headers: {
                'Authorization': 'Basic ' + Base64.encode("kuang:123")
            }
        };
        $http.post('http://localhost:8010/oauth/token', "", tokenConfig)
            .success(function (data, status, headers, config) {
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log(status);
            });

        var config = {
            params: {'format': 'xml'},
            headers: {
                'Authorization': 'Bearer 6ba9c029-7797-4e50-88f6-1db537d5b81c'
            }
        };
        $http.get('http://localhost:8010/photos/json', config)
            .success(function(data){
                console.log(data);
            });


        $scope.recipes.push({title: "黄瓜" + len, img: ''});
    };

    function printTotal() {
        console.log("recipes total: " + $scope.recipes.length);
    }

    $scope.$watch("recipes", printTotal, true);
});

recipeApp.directive('swip', function(){
    return {
        restrict: 'E',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
            console.log("xx=>" + scope.recipes);
            if(!ngModel) return;

            ngModel.$render = function () {
                console.log("start $render");

                element.html("cc");
            };
        }
    };
});
