const firebase = require('firebase');

var config = {
  apiKey            : "AIzaSyAWTPqrI1ellnJb_ULFQDfiSPXKvjTySo8",
  authDomain        : "todoapp-5e01e.firebaseapp.com",
  databaseURL       : "https://todoapp-5e01e.firebaseio.com",
  projectId         : "todoapp-5e01e",
  storageBucket     : "todoapp-5e01e.appspot.com",
  messagingSenderId : "349486486931"
};
let firebaseApp = firebase.initializeApp(config);

let database = firebase.database().ref();
let todosRefs = database.child('todos');


module.exports = {
  firebaseApp,
  database,
  todosRefs,
}
