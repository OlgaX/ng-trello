trello.controller 'listCtrl', ['$scope', 'listsFactory', 'cardsFactory', ($scope, listsFactory, cardsFactory) ->
	$scope.removeList = (index) ->
		listsFactory.removeList(index)

	$scope.cards = do cardsFactory.getCards

	$scope.addCard = (list_id) ->
		cardsFactory.addCard($scope.cardTitle, list_id)
		$scope.cardTitle = null
		return
]