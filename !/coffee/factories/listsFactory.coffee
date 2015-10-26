trello.factory 'listsFactory', ->
	service = {}
	id = 4 #next list id in lists array

	lists = [
			id: 1
			title: 'ToDo'
		,
			id: 2
			title: 'Doing'
		,
			id: 3
			title: 'Done'
	]

	service.getLists = -> lists

	service.addList = (title) ->
		return if not title? 
		lists.push {id: id++, title: title}

	service.removeList = (id) ->
		lists.splice(id, 1)

	service