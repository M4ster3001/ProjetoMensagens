angular.module('mensagemApp', []).controller('mensagemController', ['$scope', '$http', function($scope, $http){
  $scope.loading = false;
  
	$scope.getConvert = function( flg_tipo ) {

    $scope.loading = true;
    $scope.details = '';

    if(flg_tipo == 1){
      url = "http://localhost:7000/mensagens/convertNumbers";
    }else{
      url = "http://localhost:7000/mensagens/convertLetters"
    }

    let des_mensagem = $("#des_mensagem").val();
    
    if( des_mensagem.length > 0){
      $http.post( url, { message: des_mensagem } )
      .then(function( response ){ 

        $scope.details = response.data;
        $scope.loading = false;

        if(response.data){
          console.log(response.data['result']);
          //$http.get( 'http://localhost:7000/mensagens/add/'+des_mensagem+'/'+response.data['result'], { message: des_mensagem, message_number: response.data } )
        }

      });
    }else{

      $scope.details = ['Não há nada escrito'];
      $scope.loading = false;

    }
  }	
  
}]);