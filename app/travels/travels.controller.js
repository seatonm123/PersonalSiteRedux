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

      function CountryInfo(country, url){
        this.country = country;
        this.url = url;
      }

      vm.flagArray = [];

      vm.flagArray.push(
        new CountryInfo(
          'United States',
          'http://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg'
        ),
        new CountryInfo(
          'United Kingdom',
          'http://www.sciencekids.co.nz/images/pictures/flags680/United_Kingdom.jpg'
        ),
        new CountryInfo(
          'France',
          'http://www.sciencekids.co.nz/images/pictures/flags680/France.jpg'
        ),
        new CountryInfo(
        'Spain',
        'http://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg'
        ),
        new CountryInfo(
          'Germany',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg'
        ),
        new CountryInfo(
          'Italy',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Italy.jpg'
        ),
        new CountryInfo(
          'China',
          'http://www.sciencekids.co.nz/images/pictures/flags680/China.jpg'
        ),
        new CountryInfo(
          'Indonesia',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Indonesia.jpg'
        ),
        new CountryInfo(
          'Japan',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg'
        ),
        new CountryInfo(
          'Singapore',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Singapore.jpg'
        ),
        new CountryInfo(
          'Thailand',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Thailand.jpg'
          ),
          new CountryInfo(
            'Turkey',
            'http://www.sciencekids.co.nz/images/pictures/flags680/Turkey.jpg'
          ),
          new CountryInfo(
          'Canada',
          'http://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg'
          ),
          new CountryInfo(
            'Mexico',
            'http://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg'
          )
        );

    vm.setBig = function($event){
      vm.bigFlag = $event.target.src;
      vm.bigTitle = $event.target.name.toString();
      determinePic();
    };

    function determinePic(){
      switch(vm.bigTitle){
        case 'Indonesia':
          vm.bigPic = '../../assets/Bali.jpg';
          vm.bigDescription = 'Bali was a beautiful and amazing place. I got the chance to hang out with real monkeys (who, by the way, are extremely mean). Uluwatu Temple sits right by the sea new Nusa Dua. A true tropical paradise';
          break;
        case 'Japan':
          vm.bigDescription = 'I spent many months amongst the oddities and treasures of this strange foreign land. What a breathtaking country. The Land of the Rising Sun is rife with color, culture, and captivation.';
          vm.bigPic = '../../assets/Japan.jpg';
          break;
        case 'Singapore':
          vm.bigDescription = 'Singapore is the essence of hot and humid. That said the city is gorgeous and graces the banks of Marina Bay like a diamond on a ring. The nightlife is insane, the list of sights is endless, and food... dear lord, the food.';
          vm.bigPic = '../../assets/Singapore.jpg';
          break;
        case 'Mexico':
          vm.bigDescription = "La cucaracha, La cucaracha, I really hate this stupid song. La cucaracha, la cucaracha, I definitely spelled cockroach wrong.";
          vm.bigPic = '../../assets/mexico.jpg';
          break;
        case 'Italy':
          vm.bigDescription = "Rome to Naples, Naples to Ischia, back to Naples, back to Rome, Rome to Venice. What a trip! I fell in the grand canal and walked straight into a bar. Mi dispiacci.";
          vm.bigPic = '../../assets/Italy.jpg';
          break;
        case 'Canada':
          vm.bigDescription = 'Eh eh eh eh eh eh eh eh eh. Eh?';
          vm.bigPic = '../../assets/Canada.jpg';
          break;
        case 'China':
          vm.bigDescription = "Beijing is an insanely huge city. At least I got to walk some of the great wall on during my stay.";
          vm.bigPic = 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/10150723_273895639450430_3818751755269085269_n.jpg?oh=0986cf4260129a7234aec4dec14dc438&oe=5A3626AD';
          break;
        case 'United Kingdom':
          vm.bigDescription = "Would you like a spot of tea? How about some underground? A boot? Can I see your lorry? Let's talk it out over the loo.";
          vm.bigPic = '../../assets/Britain.jpg';
          break;
        case 'France':
          vm.bigDescription = "Didn't eat snail, did see Notre Dame. Didn't see opera, did see a guy chase off some bums with a baguette. Didn't hit the Lourve, did eat a baguette (a different one). Didn't save my pictures.";
          vm.bigPic = '../../assets/France.jpg';
          break;
        case 'Spain':
          vm.bigDescription = 'La Rambla! Málaga! Sangria! Beaches! Casinos! LLLLLIIIIIIQQQQQUORRRR';
          vm.bigPic = '../../assets/Spain.jpg';
          break;
        case 'Germany':
          vm.bigDescription = 'I did indeed drive on the autobahn. As fast as that little Romeo 4cyl would go.';
          vm.bigPic = '../../assets/Germany.jpg';
          break;
        case 'Thailand':
          vm.bigDescription = 'Easily my favorite so far. So cheap, so beautiful.';
          vm.bigPic = '../../assets/Thailand.jpg';
          break;
        case 'Turkey':
          vm.bigDescription = "Just don't buy a rug.";
          vm.bigPic = '../../assets/Turkey.jpg';
          break;
        case 'United States':
          vm.bigDescription = "My homeland. I'm at 40 states visited. Yay me.";
          vm.bigPic = '../../assets/USA.jpg';
          break;
      }

      vm.showLabel = function($event){
        vm.thisFlag = true;
        vm.nameInQuestion = $event.target.name;
        console.log(vm.nameInQuestion);
      };
    }

    // function setDescription(){
    //   if ()
    // }

    }

})();
