angular.module('mensagemApp', []).controller('mensagemController', ['$scope', '$http', function($scope, $http){
  $scope.loading = false;
  
	$scope.getConvert = function( flg_tipo ) {

    $scope.loading = true;
    $scope.details = '';

    let des_mensagem = $("#des_mensagem").val();
    let teste  = des_mensagem.replace(/_/g, '');

    if(flg_tipo == 1){
      url = "http://localhost:7000/mensagens/convertNumbers";
    }else{
      url = "http://localhost:7000/mensagens/convertLetters";
      des_mensagem = des_mensagem + ' ';
    }

    if((flg_tipo == 1 && $.isNumeric(teste) === false ) || (flg_tipo == 2 && $.isNumeric(teste) === true )){
      if( des_mensagem.length > 0){
        $http.post( url, { message: des_mensagem } )
        .then(function( response ){ 

          $scope.details = response.data;
          $scope.loading = false;

          if(response.data && response.data['result'] != 'Essa opção é para converter números em letras' && response.data['result'] != 'Essa opção é para converter letras em números'){          
            $http.get( 'http://localhost:7000/mensagens/add/'+des_mensagem+'/'+response.data['result'], { message: des_mensagem, message_number: response.data } )
          }

        });
      }else{

        $scope.details = ['Não há nada escrito'];
        $scope.loading = false;

      }      
    }else{
      if(flg_tipo == 1 && $.isNumeric(teste) === true ){
        $scope.details = ['Essa opção é para converter números em letras'];
      }else if(flg_tipo == 2 && $.isNumeric(teste) === false ){
        $scope.details = ['Essa opção é para converter letras em números'];
      }
      $scope.loading = false;

    }
  }	
  
}]);