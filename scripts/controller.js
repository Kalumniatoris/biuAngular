(function() {
	//var id;
	//var count;
	var myControllers = angular.module('myControllers', ['myServices', 'ngCookies']);



	myControllers.controller('DeckCtrl', ['$scope', '$http', '$cookies', '$cookieStore','KartyPL','share', function($scope, $http,  $cookies, $cookieStore, KartyPL,share) {
		
		console.log('Witam');

		$scope.todyr ={
			id: 'new'
		};

		$scope.deck={};
		$scope.deck=share.get();
		$scope.info={};
		$scope.info.count=1;
		$scope.id=$cookieStore.get('id');
		$scope.info.count=share.getIle();

		$scope.init=function(){
		var url = 'http://jsonp.afeld.me/?url=http://deckofcardsapi.com/api/deck/' + $scope.id + '/shuffle&callback=JSON_CALLBACK';
		console.log(url);
		$http.jsonp(url).success(function(data, status) {
			share.sRem(data.remaining);
			$scope.deck = data;
			$scope.status = status;
			$scope.id  = $cookieStore.get('id');

			console.log('IDE:' + $scope.id );
			if (typeof $scope.id  === 'undefined') {
				$cookieStore.put('id', data.deck_id);
				$scope.id=data.deck_id;
			}
			console.log('IDE:' + $scope.id );
			console.log(data);
			console.log($scope.deck_id);
			share.set(data);
		}).error(function(data, status) {
			console.log(data);
			console.log(status);
		})}

		$scope.getPar=function(){
			console.log("Istniejąca talia");
			var url='http://jsonp.afeld.me/?callback=JSON_CALLBACK&url=http://deckofcardsapi.com/api/deck/'+$scope.id+'/draw/?count=0';
			console.log(url)
			$http.jsonp(url).success(function(data,status){
				share.sRem(data.remaining)
				$scope.deck=data;
				$scope.status=status;
			})
		}

		$scope.setIle=function(ile){
			share.setIle(ile);
		}
		$scope.gRem=function(){
			return share.gRem();
		}
		$scope.id = $cookieStore.get('id');
		console.log('IDE:' + $scope.id);

		if (typeof $scope.id=== 'undefined') {
			$scope.id="new";
			$scope.init();
		}
		else{
			$scope.getPar();
		}

			$scope.newDeck = function() {
						console.log("Zapominanie talii");
			//$cookieStore.remove('id');
			$scope.init();
		}

	

	}]);



	myControllers.controller('CardCtrl', ['$scope', '$http', '$cookies', '$cookieStore','KartyPL','share', function($scope, $http,  $cookies, $cookieStore, KartyPL,share) {

		$scope.lst={};
		$scope.lst.cheight=150;
		$scope.lst.cwidth=100;
		$scope.deck=share.get();
		$scope.info={};
		$scope.info.count=1;
		$scope.id;

		$scope.info.count=share.getIle();
		

		$scope.getCards=function(){
			$scope.info.count=share.getIle();
		var url = 'http://jsonp.afeld.me/?callback=JSON_CALLBACK&url=http://deckofcardsapi.com/api/deck/' + $scope.id + '/draw/?count=' + $scope.info.count;
		console.log(url);
		$http.jsonp(url).success(function(data, status) {
			$scope.deck = data;
			console.log(data);
			share.set(data);
			share.sRem(share.gRem()-$scope.info.count);
		}).error(function(data, status) {
			$scope.deck = data;
			console.log(data);
			console.log(status);
			share.sRem(0);
		});
		}


		$scope.id = $cookieStore.get('id');
	
		$scope.kolorPL = function(par){

			return KartyPL.kolor(par);
			
		}
		$scope.namePL = function(par){

			return KartyPL.name(par);
			
		}




	}]);

})();
