// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',
  'app.controllers',
  'app.LoginController',
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

/******** CONTENTS *********
  1. Routes
  2. Ionic Config
****************************
*/

  // 1. Routes

    $stateProvider

    /*
      ABSTRACT STATE
      All states share this common parent which includes both tab navigation and
      right side menu navigation
    */
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'LoginController'
    })

    /*
      HOME STATE
      Initial screen that is shown when the app is loaded
    */
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html'
        }
      }
    })

    /*
      REQUEST STATE
      Users submit their personal information in order to get proposals
    */
    .state('tab.request', {
      url: '/request',
      views: {
        'tab-request': {
          templateUrl: 'templates/tab-commissions.html'
        }
      }
    })
      // REQUEST VIEW
      .state('tab.request-submit', {
        url: '/request/submit',
        views: {
          'tab-request': {
            templateUrl: 'templates/request-submit.html'
          }
        }
      })


    /*
      CHECKLIST STATE
      Users check off from a list of things to be done in order to sell their home
    */
    .state('tab.checklist', {
      url: '/checklist',
      views: {
        'tab-checklist': {
          templateUrl: 'templates/tab-checklist.html'
        }
      }
    })
      // CHECKLIST VIEW
      .state('tab.checklist-detail', {
        url: '/checklist/:checklistId',
        views: {
          'tab-checklist': {
            templateUrl: 'templates/checklist-detail.html'
          }
        }
      })
      // CHECKLIST ADD
      .state('tab.checklist-add', {
        url: '/checklist/add',
        views: {
          'tab-checklist': {
            templateUrl: 'templates/checklist-add.html'
          }
        }
      })

    /*
      PROPOSAL STATE
      Users see their proposals submitted by real estate agents
    */
    .state('tab.proposal', {
      url: '/proposal',
      views: {
        'tab-proposal': {
          templateUrl: 'templates/tab-proposal.html'
        }
      }
    })
      // PROPOSAL DEATAIL
      .state('tab.proposal-detail', {
        url: '/proposal/:proposalId',
        views: {
          'tab-proposal': {
            templateUrl: 'templates/proposal-detail.html'
          }
        }
      })

    /*
      DIRECTORY STATE
      Users browese a list of real estate agents
    */
    .state('tab.directory', {
      url: '/directory',
      views: {
        'tab-directory': {
          templateUrl: 'templates/tab-directory.html'
        }
      }
    })
      // AGENT PROFILE
      .state('tab.directory-profile', {
        url: '/directory/:agentId',
        views: {
          'tab-directory': {
            templateUrl: 'templates/agent-profile.html'
          }
        }
      })

    /*
      FALLBACK STATE
      If the route does not match any listed above, users redirected to this route
    */
    $urlRouterProvider.otherwise('/tab/home');



  // 2. Ionic Config

    /*
      BACK BUTTON
      Removes the title of the previous screen from the back button
    */
    $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
});
