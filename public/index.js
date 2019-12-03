angular.module('mensagemApp', []).controller('mensagemController', ['$scope', '$http', function($scope, $http){
  $scope.loading_message = false;
  
	$scope.getConvert = function( flg_tipo ) {

    $scope.loading_message = true;
    $scope.message_convert = '';

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

          $scope.message_convert = response.data;
          $scope.loading_message = false;

          if(response.data && response.data['result'] != 'Essa opção é para converter números em letras' && response.data['result'] != 'Essa opção é para converter letras em números'){          
            $http.get( 'http://localhost:7000/mensagens/add/'+des_mensagem+'/'+response.data['result'], { message: des_mensagem, message_convertida: response.data } )
          }

          $scope.getListMessages();

        });
      }else{

        $scope.message_convert = ['Não há nada escrito'];
        $scope.loading_message = false;

      }      
    }else{
      if(flg_tipo == 1 && $.isNumeric(teste) === true ){
        $scope.message_convert = ['Essa opção é para converter números em letras'];
      }else if(flg_tipo == 2 && $.isNumeric(teste) === false ){
        $scope.message_convert = ['Essa opção é para converter letras em números'];
      }
      $scope.loading_message = false;

    }
  }
  
  $scope.getListMessages = function( flg_tipo ) {
    $scope.loading_messages = true;

    $http.post( 'http://localhost:7000/mensagens/views' )
      .then(function( response ){ 
        console.log( response );
        console.log( response.data );
        $scope.messages = response.data;
        $scope.loading_messages = false;

      });
  }
  
}]);