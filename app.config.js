(function(){
  'use strict';

  angular
    .module('MattSeaton').config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider){

      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: 'home',
          url: '/',
          component: 'home'
        })
        .state({
          name: 'about',
          url: '/about',
          component: 'about'
        })
        .state({
          name: 'travels',
          url: '/travels',
          component: 'travels'
        })
        .state({
          name: 'projects',
          url: '/projects',
          component: 'projects'
        })
        .state({
          name: 'contact',
          url: '/contact',
          component: 'contact'
        });
    }

})();
