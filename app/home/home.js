'use strict';

angular.module('blaa.home', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', [function() {

}]);
