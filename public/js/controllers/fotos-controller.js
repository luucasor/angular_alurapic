angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
    $http.get('v1/fotos').success(function(retorno) {
  		$scope.fotos = retorno.data;
	}).error(function(erro) {
		console.log('Fotos não encontradas!!!');
	});

});