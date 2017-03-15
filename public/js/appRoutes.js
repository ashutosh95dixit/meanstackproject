angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/create',{
			templateUrl:'views/create.html'
		})
		.when('/sign',{
			templateUrl:'views/sign.html'
		})
		.when('/login',{
			templateUrl:'views/login.html'
		})
		
		.when('/contact',{
			templateUrl:'views/contact.html'
		})
		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'CityController'
		})

		.when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'TheatreController'
		})

		.when('/showtime', {
			templateUrl: 'views/showtime.html',
			controller: 'ShowTimeController'
		})

		.when('/assign', {
			templateUrl: 'views/assign.html',
			controller: 'AssignController'
		})
		.when('/Book',{
			templateUrl: 'views/cancellation.html',
			controller:'BookController'
		})

		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		});



	$locationProvider.html5Mode(true);

}]);
