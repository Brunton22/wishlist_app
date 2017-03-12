angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

	//home page
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController',
	})

	.when('/owned', {
		templateUrl: 'views/owned.html',
		controller: 'gamesController'
	})

	//insert other page routes here

	$locationProvider.html5Mode(true);

}]);
