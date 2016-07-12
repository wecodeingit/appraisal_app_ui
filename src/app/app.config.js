(function () {
	'use strict';


	angular
		.module('appraisalApp')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {

		console.log('AngularJS run() function...');
	}


})();
