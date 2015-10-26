trello.factory 'cardsFactory', ->
	service = {}
	id = 4 #next card id in cards array

	cards = [
			id: 1
			title: 'Learn CoffeeScript'
			list_id: 1
		,
			id: 2
			title: 'Learning AngularJs'
			list_id: 2
		,
			id: 3
			title: 'Learn Wordpress'
			list_id: 3
	]

	service.getCards = -> cards

	service.addCard = (title, list_id) ->
		return if not title?
		cards.push {id: id++, title: title, list_id: list_id}

	service.removeCard = (card_id) ->
		for i in [0...cards.length]
			if cards[i].id is card_id
				return cards.splice(i, 1)

	service