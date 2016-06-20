function MainController($scope) {
  $scope.name = 'Katherine'
  $scope.favColor = 'purple'
  $scope.height = '5\'3'
}

angular
  .module('app')
  .controller('MainController', MainController);