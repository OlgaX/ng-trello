trello.factory('cardsFactory', function() {
  var cards, id, service;
  service = {};
  id = 4;
  cards = [
    {
      id: 1,
      title: 'Learn CoffeeScript',
      list_id: 1
    }, {
      id: 2,
      title: 'Learning AngularJs',
      list_id: 2
    }, {
      id: 3,
      title: 'Learn Wordpress',
      list_id: 3
    }
  ];
  service.getCards = function() {
    return cards;
  };
  service.addCard = function(title, list_id) {
    if (title == null) {
      return;
    }
    return cards.push({
      id: id++,
      title: title,
      list_id: list_id
    });
  };
  service.removeCard = function(card_id) {
    var i, _i, _ref;
    for (i = _i = 0, _ref = cards.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      if (cards[i].id === card_id) {
        return cards.splice(i, 1);
      }
    }
  };
  return service;
});
