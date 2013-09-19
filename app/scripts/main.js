'use strict';

require.config({
  baseUrl: 'scripts/',
  paths: {
    jquery: '../bower_components/jquery/jquery',
    angular: '../bower_components/angular/angular',
    ngResource: '../bower_components/angular-resource/angular-resource',
    ngRoute: '../bower_components/angular-route/angular-route',
    ngMocks: '../bower_components/angular-mocks/angular-mocks',
    ngAnimate: '../bower_components/angular-animate/angular-animate',
    text: '../bower_components/requirejs-text/text',
    domReady: '../bower_components/requirejs-domready/domReady',
    bootstrapAffix: '../bower_components/bootstrap/js/affix',
    bootstrapAlert: '../bower_components/bootstrap/js/alert',
    bootstrapButton: '../bower_components/bootstrap/js/button',
    bootstrapCarousel: '../bower_components/bootstrap/js/carousel',
    bootstrapCollapse: '../bower_components/bootstrap/js/collapse',
    bootstrapDropdown: '../bower_components/bootstrap/js/dropdown',
    bootstrapModal: '../bower_components/bootstrap/js/modal',
    bootstrapPopover: '../bower_components/bootstrap/js/popover',
    bootstrapScrollspy: '../bower_components/bootstrap/js/scrollspy',
    bootstrapTab: '../bower_components/bootstrap/js/tab',
    bootstrapTooltip: '../bower_components/bootstrap/js/tooltip',
    bootstrapTransition: '../bower_components/bootstrap/js/transition',
    mixItUp: '../bower_components/mixitup/src/jquery.mixitup',
    plugins: 'plugins'
  },
  shim: {
    jquery: {exports: 'jquery'},
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    ngRoute: ['angular'],
    ngResource: {
      deps: ['angular'],
      exports: 'ngResource'
    },
    ngAnimate: {
      deps: ['angular'],
      exports: 'ngAnimate'
    },
    ngMocks: {
      deps: ['angular'],
      exports: 'angular.mock'
    },
    bootstrapAffix: ['jquery'],
    bootstrapAlert: ['jquery'],
    bootstrapButton: ['jquery'],
    bootstrapCarousel: ['jquery'],
    bootstrapCollapse: ['jquery'],
    bootstrapDropdown: ['jquery'],
    bootstrapModal: ['jquery'],
    bootstrapPopover: ['jquery'],
    bootstrapScrollspy: ['jquery'],
    bootstrapTab: ['jquery'],
    bootstrapTooltip: ['jquery'],
    bootstrapTransition: ['jquery'],
    mixItUp: ['jquery']
  },
  priority: ['jquery', 'angular'],
  urlArgs: 'v=0.1'
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
  'angular',
  'domReady',
  'app',
  'routes',
  'bootstrapAffix', 'bootstrapAlert', 'bootstrapButton', 'bootstrapCarousel', 'bootstrapCollapse', 'bootstrapDropdown',
  'bootstrapModal', 'bootstrapScrollspy', 'bootstrapTab', 'bootstrapTooltip', 'bootstrapTransition',
  'mixItUp'
], function (angular, domReady, app) {
  'use strict';

  domReady(function () {
    return angular.bootstrap(document, [app['name']]);
  });
});