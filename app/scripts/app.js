'use strict';

//require('es5-shim');
//require('es5-sham');

require('jquery');
var angular = require('angular');
require('angular-resource');
require('angular-ui-router');
require('lodash');
require('angular-ui-tree');
require('angular-bootstrap');

var app = angular.module('mct', ['ng', 'ui.router', 'ui.bootstrap', 'ui.tree']);

require('./filters');
require('./directives');
require('./controllers');

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(false);

  $urlRouterProvider.otherwise('/page1');

  $stateProvider.state('page1', {
    url: '/page1',
    templateUrl: 'partials/page1.html',
    controller: 'Page1Controller'
  })
  .state('page2', {
    url: '/page2',
    templateUrl: 'partials/page2.html',
    controller: 'Page2Controller'
  });
/*
  .state('sites', {
    url: '/sites',
    templateUrl: 'partials/sitelist.html',
    controller: 'SiteListController'
  })
  .state('sites.detail', {
    url: '/{siteId:[0-9]{0,9}}',
    templateUrl: 'partials/sitedetail.html',
    controller: 'SiteDetailController'
  })
  .state('sites.create', {
    url: '/create',
    templateUrl: 'partials/siteadd.html',
    controller: 'SiteAddController'
  })
  .state('sites.pagetree', {
    url: '/{siteId:[0-9]{0,9}}/pagetree',
    templateUrl: 'partials/pagetree.html',
    controller: 'PageTreeController'
  })
  .state('sites.pages', {
    url: '/{siteId:[0-9]{0,9}}/pages/{pageId:[0-9]{0,9}}',
    templateUrl: 'partials/pagedetail.html',
    controller: 'PageEditController'
  })

  .state('dataforms', {
    url: '/dataforms',
    templateUrl: 'partials/dataforms.html',
    controller: 'DataFormListController'
  })
  .state('dataforms.detail', {
    url: '/{formId}',
    templateUrl: 'partials/dataformdetail.html',
    controller: 'DataFormDetailsController'
  })
  .state('dataforms.create', {
    url: '/create',
    templateUrl: 'partials/dataformdetail.html',
    controller: 'DataFormAddController'
  })

  .state('users', {
    url: '/users',
    templateUrl: 'partials/userlist.html',
    controller: 'UserListController'
  })
  .state('users.add', {
    url: '/add',
    templateUrl: 'partials/useradd.html',
    controller: 'UserAddNewController'
  })
  .state('users.detail', {
    url: '/{userId:[0-9]{0,9}}',
    templateUrl: 'partials/userdetail.html',
    controller: 'UserDetailController'
  })
  .state('users.detail.credentials', {
    url: '/credentials',
    templateUrl: 'partials/usercredentials.html',
    controller: 'UserCredController'
  })
  .state('users.detail.credentials.chpassword', {
    url: '/chpassword/{credId}',
    templateUrl: 'partials/usercredchpassword.html',
    controller: 'UserCredPasswordController'
  })
  .state('users.detail.authtokens', {
    url: '/authtokens',
    templateUrl: 'partials/userauthtokens.html',
    controller: 'UserAuthTokenController'
  })

  .state('sitemap', {
    url: '/sitemap/{actionName}',
    template: 'OK',
    controller: 'SitemapController'
  })
  .state('prerender', {
    url: '/prerender/do',
    template: 'OK',
    controller: 'PrerenderController'
  });
*/

});

app.run(function ($rootScope, $location) {

  // console.log("Initialize rootScope");

  /* Reset error when a new view is loaded */
  $rootScope.$on('$viewContentLoaded', function () {
    delete $rootScope.error;
  });

  // console.log("Initialize hasRole function");

  $rootScope.initialized = true;
});
