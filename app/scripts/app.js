'use strict';

/**
 * @ngdoc overview
 * @name odaChallengeApp
 * @description
 * # odaChallengeApp
 *
 * Main module of the application.
 */
angular
  .module('odaChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.cellNav',
    'ui.grid.pagination',
    'ui.tinymce',
    'angular-momentjs',
    'ngMessages'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');


      $stateProvider

        /* ====================================================== *\
         * FRONT PAGES
        \* ====================================================== */
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
        })
        .state('reqInfo', {
          url: '/reqInfo',
          templateUrl: 'views/reqinfo.html',
          controller: 'InformationrequestCtrl'
        })
        .state('tarif', {
          url: '/tarif',
          templateUrl: 'views/tarif.html',
          controller: 'TarifCtrl'
        })
        .state('gsc', {
          url: '/gsc',
          templateUrl: 'views/gsc.html',
          controller: 'GscCtrl'
        })
        .state('faq', {
          url: '/faq',
          templateUrl: 'views/faq.html',
          controller: 'FaqCtrl'
        })
        .state('support', {
          url: '/support',
          templateUrl: 'views/support.html',
          controller: 'SupportCtrl'
        })
        .state('profil', {
          url: '/profil',
          templateUrl: 'views/profil.html',
          controller: 'ProfilCtrl'
        })
        .state('profilUpdate', {
          url: '/profilupdate',
          templateUrl: 'views/profilupdate.html',
          controller: 'ProfilupdateCtrl'
        })
        .state('password', {
          url: '/password',
          templateUrl: 'views/password.html',
          controller: 'PasswordCtrl'
        })
        .state('abonnement', {
          url: '/abonnement',
          templateUrl: 'views/abonnement.html',
          controller: 'AbonnementCtrl'
        })
        .state('desabonnement', {
          url: '/desabonnement',
          templateUrl: 'views/desabonnement.html',
          controller: 'DesabonnementCtrl'
        })
        .state('dbmanagement', {
          url: '/dbmanagement',
          templateUrl: 'views/dbmanagement.html',
          controller: 'DbmanagementCtrl'
        })
        .state('testjson', {
          url: '/testjson',
          templateUrl: 'views/testjson.html',
          controller: 'TestjsonCtrl'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          //controller: 'ContactCtrl'
        })
        .state('associate', {
          url: '/associate',
          templateUrl: 'views/associate.html',
          controller: 'AssociateCtrl'
        })
        /* ====================================================== *\
         * ADMIN PAGES
        \* ====================================================== */
        // .state('admin-dashboard', {
        //   url: '/admin',
        //   templateUrl: 'views/admin-dashboard.html',
        //   controller: 'AdminDashboardCtrl'
        // })

        // Dashboard
        .state('admin-dashboard', {
          url: '/admin',
          templateUrl: 'views/admin-dashboard.html',
          controller: 'DashboardCtrl'
        })

        .state('users', {
          url: '/users',
          templateUrl: 'views/users.html',
          controller: 'UsersCtrl'
        })
        .state('user', {
          url: '/users/user/:userId',
          templateUrl: 'views/user.html',
          controller: 'UserCtrl'
        })
        .state('databases', {
          url: '/databases',
          templateUrl: 'views/databases.html',
          controller: 'DatabasesCtrl'
        })
        .state('database', {
          url: '/databases/database/:databaseId',
          templateUrl: 'views/database.html',
          controller: 'DatabaseCtrl'
        })
        .state('pages', {
          url: '/pages',
          templateUrl: 'views/pages.html',
          controller: 'PagesCtrl'
        })
        .state('page', {
          url: '/pages/page/pageId',
          templateUrl: 'views/page.html',
          controller: 'PageCtrl'
        })
        .state('analytics', {
          url: '/analytics',
          templateUrl: 'views/analytics.html',
          controller: 'AnalyticsCtrl'
        })
        .state('createdatabase', {
          url: '/createdatabase',
          templateUrl: 'views/createdatabase.html',
          controller: 'CreatedatabaseCtrl',
          controllerAs: 'createdatabase'
        })
      /* ====================================================== *\
      \* ====================================================== */
        .state('presentation', {
          url: '/presentation',
          templateUrl: 'views/presentation.html',
          controller: 'PresentationCtrl'
        })
        .state('legal', {
          url: '/legal',
          templateUrl: 'views/legal.html',
          controller: 'LegalCtrl'
        })
        .state('cgu', {
          url: '/cgu',
          templateUrl: 'views/cgu.html',
          controller: 'CguCtrl'
        })
        .state('motivation', {
          url: '/motivation',
          templateUrl: 'views/motivation.html',
          controller: 'MotivationCtrl'
        })
        .state('plan', {
          url: '/plan',
          templateUrl: 'views/plan.html',
          controller: 'PlanCtrl'
        });
    });
