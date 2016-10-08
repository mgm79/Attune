angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.myProfile', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('menu.concerts', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/concerts.html',
        controller: 'concertsCtrl'
      }
    }
  })

  .state('myEvents', {
    url: '/page3',
    templateUrl: 'templates/myEvents.html',
    controller: 'myEventsCtrl'
  })

  .state('menu.message', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});