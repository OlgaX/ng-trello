trello.controller('cardCtrl', [
  '$scope', 'listsFactory', 'cardsFactory', function($scope, listsFactory, cardsFactory) {
    $scope.removeCard = function(card_id) {
      return cardsFactory.removeCard(card_id);
    };
    $scope.editCard = function() {
      $scope.cardEditing = true;
      return $scope.cardTitleCopy = $scope.card.title;
    };
    $scope.updateCard = function() {
      if ($scope.card.title === "") {
        return;
      }
      return $scope.cardEditing = false;
    };
    return $scope.escCardEdit = function(e) {
      if (e.keyCode === 27) {
        $scope.card.title = $scope.cardTitleCopy;
        return $scope.cardEditing = false;
      }
    };
  }
]);
