(function() {
    'use strict';

    angular
        .module('appraisalApp')
        .controller('ScoreCtrl', Score);

    Score.$inject = ['$scope', '$mdBottomSheet'];

    function Score($scope, $mdBottomSheet) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = "Enter Score";
        vm.employeeData = [
            { "id": 1, "name": "Thomas", "dept": "Sales" },
            { "id": 2, "name": "Jason", "dept": "Technology" },
            { "id": 3, "name": "Mayla", "dept": "Technology" },
            { "id": 4, "name": "Nisha", "dept": "Marketing" },
            { "id": 5, "name": "Randy", "dept": "Technology" }
        ];
        vm.measureData = [{ "id": 1, "measureName": "Goal Score", "weightage": 40 },
            { "id": 2, "measureName": "Attendance Score", "weightage": 0 },
            { "id": 3, "measureName": "Competency Score", "weightage": 20 },
            { "id": 4, "measureName": "Skill Rating Score", "weightage": 20 },
            { "id": 5, "measureName": "Performance Objective Score", "weightage": 20 }
        ];
        vm.scoreData = [];
        vm.querySearch = function(query) {
            return query ? vm.employeeData.filter(createFilterFor(query)) : vm.employeeData;
        };
        vm.calculateScore = function() {
            vm.openBottomSheet();
        };
        vm.openBottomSheet = function() {
            vm.overallScore = 90;
            $mdBottomSheet.show({
                locals: { score: vm.overallScore },
                controller: 'overallScoreCtrl',
                controllerAs: 'vm',
                templateUrl: 'src/app/score/overallScore.html'
            });
        };

        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(item) {
                return (item.name.toLowerCase().indexOf(lowercaseQuery) === 0);
            };
        }

    }

})();
