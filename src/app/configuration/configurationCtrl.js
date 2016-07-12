(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.controller:HomeCtrl
	 * @description
	 * # HomeCtrl
	 * Controller of the app
	 */

	angular
		.module('appraisalApp')
		.controller('ConfigurationCtrl', ConfigurationCtrl);

	/*
	 * recommend
	 * Using function declarations
	 * and bindable members up top.
	 */

	function ConfigurationCtrl() {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Create Configuration";
		return vm;
	}

})();