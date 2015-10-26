trello.controller 'cardCtrl', ['$scope', 'listsFactory', 'cardsFactory', ($scope, listsFactory, cardsFactory) ->
	$scope.removeCard = (card_id) ->
		cardsFactory.removeCard(card_id)

	$scope.editCard = ->
		$scope.cardEditing = true
		$scope.cardTitleCopy = $scope.card.title

	$scope.updateCard = ->
		return if $scope.card.title == ""
		$scope.cardEditing = false

	$scope.escCardEdit = (e)->
		if e.keyCode == 27
			$scope.card.title = $scope.cardTitleCopy
			$scope.cardEditing = false
]