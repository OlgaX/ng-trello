trello.controller('listsCtrl', [
  '$scope', 'listsFactory', 'cardsFactory', function($scope, listsFactory, cardsFactory) {
    $scope.lists = listsFactory.getLists();
    return $scope.addList = function() {
      listsFactory.addList($scope.listTitle);
      $scope.listTitle = null;
    };
  }
]);
