(function(){
  'use strict';

  angular
    .module('MattSeaton')
    .controller('TravelsController', TravelsController);

    TravelsController.$inject = ['$http', '$stateParams', '$state'];

    function TravelsController($http, $stateParams, $state){
      const vm = this;

      vm.$onInit = function(){
        vm.bigFlag = 'http://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg';
        vm.bigPic = '../../assets/USA.jpg';
        vm.bigTitle = 'Horizons Unknown';
        vm.bigDescription = "I've been so fortunate to see as much of the world as I have";
      };

      vm.MouseOver = function(){
        var thisPic = vm.bigPic;
        vm.thatFlag = vm.bigFlag;
        vm.bigFlag = thisPic;
      };

      vm.MouseLeave = function(){
        var thisFlag = vm.bigFlag;
        vm.thatPic = vm.bigPic;
        vm.bigFlag = vm.thatFlag;
      };

      function CountryInfo(country, url, description, altSrc){
        this.country = country;
        this.url = url;
        this.description = description;
        this.altSrc = altSrc;
      }

      vm.flagArrayOne = [];
      vm.flagArrayTwo = [];
      vm.flagArrayThree = [];
      vm.flagArrayFour = [];
      var flagArrayAll = [];

      vm.flagArrayOne.push(new CountryInfo(
        'Canada',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg',
        'Here Be Dragons',
        ''
        ),
        new CountryInfo(
          'Mexico',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg',
          '',
          ''
        ),
        new CountryInfo(
          'United Kingdom',
          'http://www.sciencekids.co.nz/images/pictures/flags680/United_Kingdom.jpg',
          '',
          ''
        ),
        new CountryInfo(
          'France',
          'http://www.sciencekids.co.nz/images/pictures/flags680/France.jpg',
          '',
          ''
        )
      );

      vm.flagArrayTwo.push(new CountryInfo(
        'Spain',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg',
        '',
        ''
      ),
      new CountryInfo(
        'Germany',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg',
        '',
        ''
      ),
      new CountryInfo(
        'Italy',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Italy.jpg',
        '',
        ''
      ));

      vm.flagArrayThree.push(new CountryInfo(
        'China',
        'http://www.sciencekids.co.nz/images/pictures/flags680/China.jpg',
        '',
        ''
      ),
      new CountryInfo(
        'Japan',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg',
        '',
        ''
      ),
      new CountryInfo(
        'Singapore',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Singapore.jpg',
        '',
        ''
      )
    );

    vm.flagArrayFour.push(new CountryInfo(
      'Thailand',
      'http://www.sciencekids.co.nz/images/pictures/flags680/Thailand.jpg',
      '',
      ''
    ),
    new CountryInfo(
      'Turkey',
      'http://www.sciencekids.co.nz/images/pictures/flags680/Turkey.jpg',
      '',
      ''
    ),
    new CountryInfo(
      'Indonesia',
      'http://www.sciencekids.co.nz/images/pictures/flags680/Indonesia.jpg',
      'Bali was a beautiful and amazing place. I got the chance to hang out with real monkeys (who, by the way, are extremely mean). Uluwatu Temple sits right by the sea new Nusa Dua. A true tropical paradise',
      ''
    ),
    new CountryInfo(
      'United States',
      'http://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg',
      '',
      ''
    )
  );

    flagArrayAll = [vm.flagArrayOne.concat(vm.flagArrayTwo).concat(vm.flagArrayThree).concat(vm.flagArrayFour)];

    vm.setBig = function($event){
      vm.bigFlag = $event.target.src;
      vm.bigTitle = $event.target.name.toString();
      determinePic();
    };

    function determinePic(){
      switch(vm.bigTitle){
        case 'Indonesia':
          vm.bigDescription = 'Bali was a beautiful and amazing place. I got the chance to hang out with real monkeys (who, by the way, are extremely mean). Uluwatu Temple sits right by the sea new Nusa Dua. A true tropical paradise';
      }
      switch(vm.bigTitle){
        case 'Indonesia':
          vm.bigPic = '../../assets/Bali.jpg';
      }
    }

    // function setDescription(){
    //   if ()
    // }

    }

})();
