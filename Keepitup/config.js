import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB5sWb6gzsumoE6czQd1eRq2bSjDuULNSM",
    authDomain: "keepit-174f7.firebaseapp.com",
    databaseURL: "https://keepit-174f7-default-rtdb.firebaseio.com",
    projectId: "keepit-174f7",
    storageBucket: "keepit-174f7.appspot.com",
    messagingSenderId: "670170909727",
    appId: "1:670170909727:web:18785e9ebdb6761842592a",
    measurementId: "G-V5HCKSS77Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
 export default firebase.database();

