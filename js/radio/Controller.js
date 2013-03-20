var app = angular.module('app', []);
app.controller('Ctrl', function ($scope, $http) {
    var filter = $scope.filter = {
        mark:"1"
    };

    $scope.seeRadioV = true;

    $scope.show = showCC();

    function showCC() {
        return filter.mark === "1" || filter.mark === "2" ||  filter.mark === "4";
    }

    $scope.cons = function() {
        console.log($scope.filter);
    }

    $scope.$watch('filter',
        function(newValue, oldValue, scope) {
            console.log(newValue);
            var mark = $scope.filter.mark;
            $scope.seeRadioV = true;

            if(mark === "3") {
                $scope.show = false;
                $scope.v = undefined;
            }

            if(mark === "2") {
                $scope.v = "2";
            }

            if(mark === "1") {
                $scope.v = "1";
                $scope.seeRadioV = false;
            }
            $scope.show = showCC();
        }, true
    );
});

app.directive('mark', function(){
    return {
        restrict: 'E',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            scope.$watch('filter',function() {
                console.log("mark directive.");
                scope.showCCM = scope.filter.mark === "1" || scope.filter.mark === "4";
            }, true);
            element.bind('click', function(e) {
                console.log("dsds.");
            });
        },

        templateUrl:"seeTemplate.html"
    };
});
