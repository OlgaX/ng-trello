trello.controller 'listsCtrl', ['$scope', 'listsFactory', 'cardsFactory', ($scope, listsFactory, cardsFactory) ->
	$scope.lists = do listsFactory.getLists

	$scope.addList = ->
		listsFactory.addList($scope.listTitle)
		$scope.listTitle = null
		return
]