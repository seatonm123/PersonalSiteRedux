(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', '$stateParams', '$state'];

    function HomeController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.title = 'Hello from the Home Controller';
      };

      vm.goState = function(str){
        $state.go(str);
      };
    }

})();
