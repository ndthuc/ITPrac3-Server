const express = require("express");
const bodyParser = require('body-parser');

const accountRoutes = require('./routes/account');
const deviceRoutes = require('./routes/device');
const app = express();

const Firebase = require('firebase');
Firebase.initializeApp({
    url: "https://tin217dv01.firebaseio.com/",
});

const db = Firebase.database();

const sensorReference = db.ref("")

app.use(bodyParser.json());

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/device', deviceRoutes);

app.use('/account', accountRoutes);

app.listen(8080);

