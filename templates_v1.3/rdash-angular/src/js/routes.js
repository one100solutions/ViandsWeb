'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'index.html'
            })
            .state('myfavourites', {
                url: '/',
                templateUrl: 'templates/myfavourites.html'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'
            })
            .state('tables', {
                url: '/tables',
                templateUrl: 'templates/tables.html'
            })
            .state('restaurants', {
                url: '/restaurants',
                templateUrl: 'templates/restaurants.html'
            })
            .state('orders', {
                url: '/orders',
                templateUrl: 'templates/orders.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html'
            })
            ;
             
    }
]);