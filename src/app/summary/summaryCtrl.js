(function() {
    'use strict';
    angular
        .module('appraisal')
        .controller('SummaryCtrl', Summary);

    Summary.$inject = ['$timeout', '$scope'];

    function Summary($timeout, $scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.isDrilldownView = false;
        vm.actionVisible = false;
        vm.title = "View Summary";
        vm.employeeList = [{
            "employeeID": "1",
            "name": "Thomas",
            "overallScore": 80
        }, {
            "employeeID": 2,
            "name": "Maya",
            "overallScore": 80
        }];

        vm.nextView = function(employee) {
            vm.isDrilldownView = true;
            employee.scores = [{
                "name": "Goal Score",
                "value": "100"
            }, {
                "name": "Performance",
                "value": "100"
            }, {
                "name": "Attendance",
                "value": "100"
            }, {
                "name": "Skill set",
                "value": "100"
            }];
            vm.employee = employee;
        };

        $scope.$watch('vm.isDrilldownView', function(isOpen) {
            if (isOpen) {


                $timeout(function() {
                    vm.actionVisible = vm.isDrilldownView;
                }, 0);
                $timeout(function() {

                    vm.tooltipVisible = vm.isDrilldownView;
                }, 1500);

            } else {
                vm.actionVisible = vm.isDrilldownView;
                vm.tooltipVisible = vm.isDrilldownView;
            }
        });


        vm.prevView = function() {
            vm.isDrilldownView = false;
        };
        return vm;
    }

})();
