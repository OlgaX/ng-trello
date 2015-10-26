trello.factory('listsFactory', function() {
  var id, lists, service;
  service = {};
  id = 4;
  lists = [
    {
      id: 1,
      title: 'ToDo'
    }, {
      id: 2,
      title: 'Doing'
    }, {
      id: 3,
      title: 'Done'
    }
  ];
  service.getLists = function() {
    return lists;
  };
  service.addList = function(title) {
    if (title == null) {
      return;
    }
    return lists.push({
      id: id++,
      title: title
    });
  };
  service.removeList = function(id) {
    return lists.splice(id, 1);
  };
  return service;
});
