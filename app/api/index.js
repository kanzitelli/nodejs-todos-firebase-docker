const _     = require('lodash');
const fiire = require('../firebase');

const getTodos = () => {
  return new Promise((resolve, reject) => {
    fiire.todosRefs
      .once('value')
      .then((snapshot) => {
        var todos = [];
        snapshot.forEach((childSnapshot) => {
          var key  = childSnapshot.key;
          var data = childSnapshot.val();

          todos.push(data);
        });
        resolve(todos);
      });
  });
}

const getTodoById = (id) => {
  return new Promise((resolve, reject) => {
    fiire.todosRefs
      .orderByKey()
      .equalTo(id)
      .once('value')
      .then((snapshot) => {
        var data = snapshot.val();

        resolve(data);
      })
  });
}

module.exports = {
  getTodos,
  getTodoById,
}
