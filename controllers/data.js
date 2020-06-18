// const reference = require('../references/firebase');

exports.getData = (req, res, next)=>{
    const db = reference.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    db.collection('esp8266').orderBy('time', 'asc').get()
    .then(snapshot =>{
        snapshot.forEach(doc =>{
            wholeData.push(doc.data())
        });
        console.log(wholeData);

        res.send(wholeData);
    });

    res.status(200).json({
        temperature: wholeData.temperature,
        humidity: wholeData.humidity,
        time: new Date()
    });
};

exports.addData = (req, res, next) =>{
    let temperature = req.body.temperature;
    let humidity = req.body.humidity;
    const db = reference.firestore();
    db.settings({
        timestampsInSnapshots: true
    });
    db.collection('esp8266').add({
        temperature: temperature,
        humidity: humidity,
        time: new Date()
    });
    res.status(201).json({
        temperature: temperature,
        humidity: humidity,
        time: new Date()
    });
}