(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('ContactController', ContactController);

    ContactController.$inject = ['$http', '$stateParams', '$state'];

    function ContactController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.gitShown = false;
      };
    }

})();
