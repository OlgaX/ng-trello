trello.controller('listCtrl', [
  '$scope', 'listsFactory', 'cardsFactory', function($scope, listsFactory, cardsFactory) {
    $scope.removeList = function(index) {
      return listsFactory.removeList(index);
    };
    $scope.cards = cardsFactory.getCards();
    return $scope.addCard = function(list_id) {
      cardsFactory.addCard($scope.cardTitle, list_id);
      $scope.cardTitle = null;
    };
  }
]);
