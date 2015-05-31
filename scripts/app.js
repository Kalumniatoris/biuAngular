(function() {
	var app = angular.module('biut', ['ngRoute', 'myServices', 'myControllers', 'ui.router']);
		

		app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
				$stateProvider.state("main",
				{
					controller:"DeckCtrl as deck",
					url:"",
					abstract: true

				})

			$urlRouterProvider.otherwise('/');


			}])

		app.config(["$stateProvider",function($stateProvider){
			$stateProvider.state('main.deck',{
				url: '/',
				views:{
					'deck@':{
						controller:"DeckCtrl as deck",
						templateUrl: "templates/dtemp.html"
					},
					'cards@':{
						controller:"CardCtrl as card",
						templateUrl: "templates/card.html"
					}

				}
			})

		
		}])


	app.directive('dyrektywy', [function () {
		return {
			template: 'id: {{id}}'
		};
	}])	

	app.directive('cookie', [function () {
		return {
			restrict: 'E',
			template: 'Jakiś wielki baner o ciasteczkach'
		};
	}])



})();
