angular.module('alurapic').controller('FotosController', function($scope, $http){

	$scope.fotos = [];
	$scope.filtro = '';

	$http.get('/v1/fotos').success(function(retorno) {
			console.log(retorno);
  		$scope.fotos = retorno;
	}).error(function(erro) {
		console.log('Fotos não encontradas:: '.erro);
	});

	console.log($scope.filtro);
});
