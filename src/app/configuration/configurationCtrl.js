(function() {
    'use strict';



    angular
        .module('appraisal')
        .controller('ConfigurationCtrl', ConfigurationCtrl);


    function ConfigurationCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = "Create Configuration";
        return vm;
    }

})();
