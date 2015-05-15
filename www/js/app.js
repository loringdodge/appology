// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', [
  'ionic',

  // Factories
  'app.AgentFactory',
  'app.AuthFactory',
  'app.ChecklistFactory',
  'app.LocationFactory',
  'app.ProposalFactory',
  'app.RequestFactory',

  // Controllers
  'app.AgentsController',
  'app.AgentController',
  'app.LoginController',
  'app.LogoutController',
  'app.SignUpController',
  'app.ChecklistController',
  'app.LocationController',
  'app.ProposalController',
  'app.ProposalsController',
  'app.RequestController',

  // Directives
  'app.LocationDirective',

  // Modules
  'ionic.contrib.ui.cards'
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

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

/******** CONTENTS *********
  1. States
  2. Ionic Config
****************************
*/

  // 1. States

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
      * REQUEST STATE
      Users submit their personal information in order to get proposals
    */
    .state('tab.request', {
      url: '/request',
      views: {
        'tab-request': {
          templateUrl: 'templates/tab-request.html',
          controller: 'RequestController'
        }
      }
    })
      // ** View
      .state('tab.request-submit', {
        url: '/request/submit',
        views: {
          'tab-request': {
            templateUrl: 'templates/request-submit.html',
            controller: 'RequestController'
          }
        }
      })


    /*
      * CHECKLIST STATE
      Users check off from a list of things to be done in order to sell their home
    */
    .state('tab.checklist', {
      url: '/checklist',
      views: {
        'tab-checklist': {
          templateUrl: 'templates/tab-checklist.html',
          controller: 'ChecklistController'
        }
      }
    })
      // ** View
      .state('tab.checklist-detail', {
        url: '/checklist/:checklistId',
        views: {
          'tab-checklist': {
            templateUrl: 'templates/checklist-detail.html'
          }
        }
      })
      // ** Add
      .state('tab.checklist-add', {
        url: '/checklist/add',
        views: {
          'tab-checklist': {
            templateUrl: 'templates/checklist-add.html'
          }
        }
      })

    /*
      * PROPOSAL STATE
      Users see their proposals submitted by real estate agents
    */
    .state('tab.proposals', {
      url: '/proposals/:userId',
      views: {
        'tab-proposals': {
          templateUrl: 'templates/tab-proposals.html',
          controller: 'ProposalsController'
        }
      }
    })
      // ** Detail
      .state('tab.proposal', {
        url: '/proposal/:proposalId',
        views: {
          'tab-proposals': {
            templateUrl: 'templates/proposal.html',
            controller: 'ProposalController'
          }
        }
      })
        // *** Fees
        .state('tab.proposal.fees', {
          url: '/fees',
          views: {
            'proposal-view': {
              templateUrl: 'templates/proposal-fees.html',
              controller: 'ProposalController'
            }
          }
        })

        // *** Service
        .state('tab.proposal-detail.service', {
          url: '/services',
          views: {
            'proposal-view': {
              templateUrl: 'templates/proposal-services.html',
              controller: 'ProposalController'
            }
          }
        })

        // *** Questions
        .state('tab.proposal-detail.questions', {
          url: '/questions',
          views: {
            'proposal-view': {
              templateUrl: 'templates/proposal-questions.html',
              controller: 'ProposalController'
            }
          }
        })
    /*
      * AGENT STATE
      Users browse a list of real estate agents
    */
    .state('tab.agents', {
      url: '/agents',
      views: {
        'tab-agents': {
          templateUrl: 'templates/tab-agents.html',
          controller: 'AgentsController'
        }
      }
    })
      // ** Profile
      .state('tab.agent', {
        url: '/agent/:agentId',
        views: {
          'tab-agents': {
            templateUrl: 'templates/agent.html',
            controller: 'AgentController'
          }
        }
      })
        // *** Info
        .state('tab.agent.info', {
          url: '/info',
          views: {
            'profile-view': {
              templateUrl: 'templates/agent-info.html',
              controller: 'AgentController'
            }
          }
        })
        // *** Reviews
        .state('tab.agent.reviews', {
          url: '/reviews',
          views: {
            'profile-view': {
              templateUrl: 'templates/agent-reviews.html',
              controller: 'AgentController'
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
