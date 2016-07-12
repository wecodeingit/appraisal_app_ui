(function() {
	'use strict';

	angular
		.module('appraisalApp')
		.controller('ScoreCtrl', Score);


	function Score() {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Enter Score";
		return vm;

	}

})();