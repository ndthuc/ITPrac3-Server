const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyB_53W375OiGoPGAOB7zJyrjgPM8y9KLe0",
    authDomain: "tin217dv01-72791.firebaseapp.com",
    databaseURL: "https://tin217dv01-72791.firebaseio.com",
    projectId: "tin217dv01-72791",
    storageBucket: "tin217dv01-72791.appspot.com",
    messagingSenderId: "351011802312",
    appId: "1:351011802312:web:43a48a28868401319029fd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

module.exports = firebaseApp;