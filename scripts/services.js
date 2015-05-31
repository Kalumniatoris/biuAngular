(function(){
	var myServices = angular.module('myServices',['ngResource','ngCookies']);

myServices.factory('share', [function () {
this.remain=52;
this.sRem=function(i){
	this.remain=i;
}
this.gRem=function(){
	return this.remain;
}
this.ile=2;
this.getIle=function(){
	return this.ile;
}	
this.setIle=function(ile){
	this.ile=ile;
}
this.data={};
this.get=function(){
	return this.data;
}
this.set=function(data){
	this.data=data;
}
return this;
}])

myServices.service('KartyPL',function(){


	this.kolor = function(kolor){
		switch(kolor){
			case 'HEARTS':
			return 'kier';
			break;
			case 'DIAMONDS':
			return 'karo';
			break;
			case 'SPADES':
			return 'pik';
			break;
			case 'CLUBS':
			return 'trefl';
			break;
			default:
			return '---';
			break;
		}
	}

	this.name = function(name){
		switch(name){
			case "ACE":
				return "As"
				break;
			case "JACK":
				return "Walet"
				break;
			case "QUEEN":
				return "Dama"
				break;
			case "KING":
				return "Król"
				break;
			case "0":
				return "10"
				break;
			default:
				return name;
				break;
		}



	}

	return this;


})


})();