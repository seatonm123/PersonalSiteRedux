(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('CoreController', CoreController);

    CoreController.$inject = ['$http', '$stateParams', '$state'];

    function CoreController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.navShown = false;
      };

      vm.showNav = function(){
        vm.navShown = true;
      };

      vm.goState = function(str){
        $state.go(str);
      };
    }
})();
