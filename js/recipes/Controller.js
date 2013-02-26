var recipeApp = angular.module('recipeApp', []);
recipeApp.controller('RecipeController', function RecipeController($scope) {

    $scope.recipes = [
        {title: '牛奶红豆沙', img: 'http://s3.stooory.com/static/recipe/3/1361600700_28085_m.1361601033.jpg'},
        {title: '榨菜牛肉碎汤', img: 'http://s2.stooory.com/static/recipe/3/1359686214_16998_m.1359687383.jpg'},
        {title: '果干面包', img: 'http://s3.stooory.com/static/recipe/3/1359846141_8038_m.1359846502.jpg'}
    ];

    $scope.$watch("recipes", swipe, true);

    $scope.addRecipe = function(len){
        console.log("addRecipe");
        console.log(document.getElementById('recipes-ul'));
        $scope.recipes.push({title: "黄瓜" + len, img: ''});
    };

    function swipe() {
        console.log("recipes total: " + $scope.recipes.length);
    }
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
