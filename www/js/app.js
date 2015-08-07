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
  'app.CardController',
  'app.CardsController',
  'app.ChecklistController',
  'app.ChecklistAddController',
  'app.ChecklistDetailController',
  'app.LocationController',
  'app.ProposalController',
  'app.ProposalFeesController',
  'app.ProposalInterviewController',
  'app.ProposalQuestionsController',
  'app.ProposalsController',
  'app.BellController',
  'app.RequestController',
  'app.SplashController',

  // Directives
  'app.CommissionDirective',
  'app.LocationDirective',
  'app.NoScrollDirective',
  'app.ProposalFeesDirective',
  'app.ReviewImgDirective',
  'app.StarDirective',

  // Filters
  'app.Percentage',

  // Modules
  'd3Module',
  'ngLodash',
  'ngMessages',
  'ionic.utils',
  'ionic.contrib.ui.tinderCards',
  'ngCordova',
  'ionic.service.core',
  'ionic.service.analytics'
])

.run(function($ionicPlatform, $ionicAnalytics) {
  $ionicPlatform.ready(function() {

    $ionicAnalytics.register({
      // Used only during development...remove for production
      dryRun: true
    });

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
  1. States
  2. Ionic Config
****************************
*/

  // 1. States

    $stateProvider

    /*
      SPLASH STATE
      Splash is the default route and will be triggered when the user first opens the app
    */
    .state('splash', {
      url: '/splash',
      templateUrl: 'js/splash/splash.view.html',
      controller: 'SplashController'
    })

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
          templateUrl: 'js/request/request-tab.view.html',
          controller: 'BellController'
        }
      }
    })
      // ** View
      .state('tab.request-submit', {
        url: '/request/submit',
        views: {
          'tab-request': {
            templateUrl: 'js/request/request-submit.view.html',
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
          templateUrl: 'js/checklist/checklist-tab.view.html',
          controller: 'ChecklistController'
        }
      }
    })
      // ** View
      .state('tab.checklist-detail', {
        url: '/checklist/:checklistId',
        params: { item: null },
        views: {
          'tab-checklist': {
            templateUrl: 'js/checklist/checklist-detail.view.html',
            controller: 'ChecklistDetailController'
          }
        }
      })
      // ** Add
      .state('tab.checklist-add', {
        url: '/checklist/add/:category',
        views: {
          'tab-checklist': {
            templateUrl: 'js/checklist/checklist-add.view.html',
            controller: 'ChecklistAddController'
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
          templateUrl: 'js/proposal/proposals-tab.view.html',
          controller: 'ProposalsController'
        }
      }
    })
      // ** Detail
      .state('tab.proposal', {
        abstract: true,
        url: '/proposal/:proposalId',
        params: { proposalId: null },
        views: {
          'tab-proposals': {
            templateUrl: 'js/proposal/proposal.view.html',
            controller: 'ProposalController'
          }
        }
      })
        // *** Fees
        .state('tab.proposal.fees', {
          url: '/fees/:proposalId',
          params: { proposalId: null },
          views: {
            'proposal-view': {
              templateUrl: 'js/proposal/proposal-fees.view.html',
              controller: 'ProposalController'
            }
          }
        })

        // *** Service
        .state('tab.proposal.services', {
          url: '/services/:proposalId',
          params: { proposalId: null },
          views: {
            'proposal-view': {
              templateUrl: 'js/proposal/proposal-services.view.html',
              controller: 'ProposalController'
            }
          }
        })

        // *** Questions
        .state('tab.proposal.questions', {
          url: '/questions/:proposalId',
          params: { proposalId: null },
          views: {
            'proposal-view': {
              templateUrl: 'js/proposal/proposal-questions.view.html',
              controller: 'ProposalQuestionsController'
            }
          }
        })

      // *** Interview
      .state('tab.proposal-interview', {
        url: '/interview/:proposalId',
        params: { proposalId: null },
        views: {
          'tab-proposals': {
            templateUrl: 'js/proposal/proposal-interview.view.html',
            controller: 'ProposalInterviewController'
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
          templateUrl: 'js/agent/agents-tab.view.html',
          controller: 'AgentsController'
        }
      }
    })
      // ** Profile
      .state('tab.agent', {
        abstract: true,
        url: '/agent/:agentId',
        views: {
          'tab-agents': {
            templateUrl: 'js/agent/agent.view.html',
            controller: 'AgentController'
          }
        }
      })
        // *** Info
        .state('tab.agent.info', {
          url: '/info',
          views: {
            'profile-view': {
              templateUrl: 'js/agent/agent-info.view.html',
              controller: 'AgentController'
            }
          }
        })
        // *** Reviews
        .state('tab.agent.reviews', {
          url: '/reviews',
          views: {
            'profile-view': {
              templateUrl: 'js/agent/agent-reviews.view.html',
              controller: 'AgentController'
            }
          }
        })

    /*
      FALLBACK STATE
      If the route does not match any listed above, users redirected to this route
    */
    $urlRouterProvider.otherwise('/splash');



  // 2. Ionic Config

    /*
      BACK BUTTON
      Removes the title of the previous screen from the back button
    */
    $ionicConfigProvider.backButton.previousTitleText(false).text('&emsp;&emsp;');
});
