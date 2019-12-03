// index.js
angular.module('angularApp', [])
  .controller('indexController', function($scope) {

   // Initialize variables
   $scope.mensagem = '';
   $scope.greeting1 = `Hello ${$scope.mensagem}`;

  })