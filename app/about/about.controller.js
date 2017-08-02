(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('AboutController', AboutController);

    AboutController.$inject = ['$http', '$stateParams', '$state'];

    function AboutController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.title = 'Hello from about';
      };

    }
})();
