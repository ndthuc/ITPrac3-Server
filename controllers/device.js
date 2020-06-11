exports.getDevices = (req, res, next)=>{
    res.status(200).json({
        devices:{
            idSensor:"",
            name: "",
            createDate: "",
            status: 0,
            typeReseau: ""
        }
    });
};

exports.createDevice = (req, res, next) =>{
    const name = req.body.name;
    const createDate = req.body.createDate;
    const status = req.body.status;
    const typeReseau = req.body.typeReseau;
    // console.log(name, createDate, status, typeReseau);
    res.status(201).json({
        message: 'New sensor create successfully!',
        device: {
            idSensor: new this.createDevice(),
            name: name,
            createDate: createDate,
            status: status,
            typeReseau: typeReseau
            
        }
    });
};

exports.deleteDevice = (req, res, next) => {
    const idSensor = req.body.idSensor;
    let result = FindSensor(idSensor); //viet sau
    res.status(401).json({
        message: 'Delete permanetly from server!',
        device: {
            idSensor: idSensor,
            name: result.name,
            createDate: result.createDate,
            status: result.status,
            typeReseau: result.typeReseau
            
        }
    })
}

exports.updateDevice = (req, res, next) =>{
    const idSensor = req.body.idSensor;
    const name = req.body.name;
    const createDate = req.body.createDate;
    const status = req.body.status;
    const typeReseau = req.body.typeReseau;
    res.status(428).json({
        device: {
            idSensor: idSensor,
            name: name,
            createDate: createDate,
            status: status,
            typeReseau: typeReseau            
        }
    })
}

