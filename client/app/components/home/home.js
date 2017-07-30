import angular from 'angular';
import {homeDirective} from './home.directive';

// placing an export in front of a var is the same
// as exporting the var at the end of the file
// using export {varname}
export const home = angular.module('home', [])
// config injects some dependencies such as the ability to set routes
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
})
.directive('home', homeDirective);
