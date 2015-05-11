// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers'])

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
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })


    /*
      AUTH STATE
      All processes related to logging in, logging out, and signing up
    */
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html'
        }
      }
    })

    /*
      HOME STATE
      The initial screen that is shown when the app is loaded
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
    */
    .state('tab.request', {
      url: "/request",
      views: {
        'tab-request': {
          templateUrl: "templates/request-commissions.html"
        }
      }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html'
          }
        }
      })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html'
        }
      }
    })
      /*
      HOME STATE
    */
    .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html"
        }
      }
    })

    /*
      AGENTS STATE
    */
    .state('app.agents', {
      url: "/agents",
      views: {
        'menuContent': {
          templateUrl: "templates/agent-directory.html"
        }
      }
    })

    .state('app.agentsProfile', {
      url: "/agents/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/agent-profile.html"
        }
      }
    })

    /*
      CHECKLIST STATE
    */
    .state('app.checklist', {
      url: "/checklist",
      views: {
        'menuContent': {
          templateUrl: "templates/checklist.html"
        }
      }
    })

    .state('app.checklistAdd', {
      url: "/checklist/add",
      views: {
        'menuContent': {
          templateUrl: "templates/checklist-add.html"
        }
      }
    })


    /*
      PROPOSAL STATE
    */
    .state('app.proposals', {
      url: "/proposals",
      views: {
        'menuContent': {
          templateUrl: "templates/proposal-list.html"
        }
      }
    })

    .state('app.proposalsDetails', {
      url: "/proposals/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/proposal-detail.html"
        }
      }
    })

    /*
      REQUEST STATE
    */
    .state('app.request', {
      url: "/request",
      views: {
        'menuContent': {
          templateUrl: "templates/request-commissions.html"
        }
      }
    })

    .state('app.requestSubmit', {
      url: "/request/submit",
      views: {
        'menuContent': {
          templateUrl: "templates/request-submit.html"
        }
      }
    })

    /*
      FALLBACK STATE
    */
    $urlRouterProvider.otherwise('/tab/home');


  // 2. Ionic Config

  // Removes the title of the previous screen from the back button
    $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
});
