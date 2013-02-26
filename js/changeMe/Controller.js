angular.module('customControl', []).
    directive('contenteditable', function () {
        return {
            restrict:'A', // only activate on element attribute
            require:'?ngModel', // get a hold of NgModelController
            link:function (scope, element, attrs, ngModel) {
                console.log("ngModel=>" + ngModel); // 只会执行一次
                if (!ngModel) return; // do nothing if no ng-model

                // 只要model name 一致，发生变更都会进行更新
                // 当model发生变更时触发更新
                /**  ???
                 * 为什么div ngModel变化只会执行read()?
                 * 。因为textarea的model发生变化，angular会自行通知变更
                 * 为什么textarea变化，需要手动去ngModel.$reader?
                 * 。因为ngModel不能绑定，且这是自定义指令，需要给出变更方法
                 **/
                ngModel.$render = function () {
                    console.log("render." + scope.userContent1);
                    element.html(ngModel.$viewValue || '');
                };

                // Listen for change events to enable binding
                element.bind('keyup change', function () {
                    scope.$apply(read);
                });
                read(); // initialize

                // Write data to the model
                // model 是angularJS的概念，该值在该状态未展示
                // 要区分model 和 html()
                function read() {
                    ngModel.$setViewValue(element.html()); // 设置model中的值
                    console.log("read." + scope.userContent1 + " - " + element.html());
                }
            }
        };
    });