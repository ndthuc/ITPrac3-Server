
exports.getAccounts = (req, res, next)=>{
    res.status(200).json({
        users:{
            idUser: "",
            name: "",
            pass: "",
            enrollDate: "",
            role: "",
            status: ""
        }
    });
};

exports.getAccount = (req, res, next)=>{
    res.status(200).json({
        user:{
            idUser: "",
            name: "",
            pass: "",
            enrollDate: "",
            role: "",
            status: ""
        }
    });
};


exports.createAccount = (req, res, next) =>{
    let name = req.body.name;
    let pass = req.body.pass;
    let enrollDate = req.body.enrollDate;
    let role = req.body.role;
    let status = req.body.status;
    // console.log(name, createDate, status, typeReseau);
    res.status(201).json({
        message: 'Account create successfully!',
        user:{
            idUser: new CreateID(),
            name: name,
            pass: pass,
            enrollDate: enrollDate,
            role: role,
            status: status
        }
    });
};

exports.deleteAccount = (req, res, next) => {
    let idUser = req.body.idUser;
    let result = Delete(idUser); //viet sau
    res.status(401).json({
        message: 'Delete permanetly from server!',
        user:{
            idUser: new CreateID(),
            name: name,
            pass: pass,
            enrollDate: enrollDate,
            role: role,
            status: status
        }
    })
}

exports.updateAccount = (req, res, next) =>{
    let idUser = req.body.idUser;
    let name = req.body.name;
    let pass = req.body.pass;
    let enrollDate = req.body.enrollDate;
    let role = req.body.role;
    let status = req.body.status;
    res.status(428).json({
        user:{
            idUser: idUser,
            name: name,
            pass: pass,
            enrollDate: enrollDate,
            role: role,
            status: status
        }
    })
}