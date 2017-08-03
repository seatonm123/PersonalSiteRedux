(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$http', '$stateParams', '$state'];

    function ProjectsController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.showFlux = false;
        vm.showGamb = false;
        vm.showMost = false;
      };

      vm.displayFlux = function(){
        vm.showFlux = true;
        vm.showGamb = false;
        vm.showMost = false;
      };

      vm.displayGamb = function(){
        vm.showFlux = false;
        vm.showGamb = true;
        vm.showMost = false;
      };

      vm.displayMost = function(){
        vm.showFlux = false;
        vm.showGamb = false;
        vm.showMost = true;
      };

      vm.resetProjects = function(){
        vm.showFlux = false;
        vm.showGamb = false;
        vm.showMost = false;
      };

    }

})();
