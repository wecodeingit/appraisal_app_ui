(function() {
    'use strict';
    angular
        .module('appraisalApp')
        .controller('SummaryCtrl', Summary);

    function Summary() {
        /*jshint validthis: true */

        var employeeList = [{
            "employeeID": "1",
            "name": "Thomas",
            "overallScore": 80
        }, {
            "employeeID": 2,
            "name": "Maya",
            "overallScore": 80
        }];

        var vm = this;
        vm.title = "View Summary";
        var tabs = [{
            list: employeeList
        }];
        vm.tabs = tabs;
        vm.selectedIndex = 0;
        vm.onTabSelected = function(tab) {
            vm.isDrilldownView = vm.tabs.length <= 1 ? false : true;
        };
        vm.addTab = function(employee) {
            tabs.push({
                list: employee
            });
        };
        vm.removeTab = function(tab) {
            var index = tabs.indexOf(tab);
            tabs.splice(index, 1);
        };
        return vm;
    }

})();
