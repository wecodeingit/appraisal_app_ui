(function() {
	'use strict';
	angular
		.module('appraisalApp')
		.controller('SummaryCtrl', Summary);


	function Summary() {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "View Summary";
		return vm;
	}

})();