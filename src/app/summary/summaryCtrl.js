(function() {
    'use strict';
    angular
        .module('appraisalApp')
        .controller('SummaryCtrl', Summary);

    Summary.$inject = ['$timeout', '$scope'];

    function Summary($timeout, $scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.employeeList = [{
            "employeeID": "1",
            "name": "Thomas",
            "overallScore": 80
        }, {
            "employeeID": 2,
            "name": "Maya",
            "overallScore": 80
        }];



        vm.title = "View Summary";


        vm.nextView = function(employee) {
            vm.isDrilldownView = true;
            employee.individualScore = [{
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
        vm.isDrilldownView = false;
        vm.isOpen = false;
        $scope.$watch('vm.isDrilldownView', function(isOpen) {
            if (isOpen) {
                vm.isOpen = true;
                $timeout(function() {
                    vm.tooltipVisible = vm.isDrilldownView;
                }, 600);
            } else {
                vm.tooltipVisible = vm.isDrilldownView;
            }
        });

        vm.stopEvent = function($event) {
            $event.stopPropagation();
            // Some code to find and display the next image
        };


        vm.prevView = function() {
            vm.isDrilldownView = false;


        };
        return vm;
    }

})();
