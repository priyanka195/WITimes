const studentregisterService = require("./../services/studentregisterService");
const{ ValidationResult } = require("express-validator");

let GetPageRegister = (req, res) => {
    return res.render("studentregister.ejs", {
        errors: req.flash("errors")
    });
};

let CreateNewUser = async (req, res) => {
    //validate required fields
    let errorsArr = [];
    let validationErrors = ValidationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        console.log(req.body);
        return res.redirect("/studentregister");
    }

    //create a new user
    let NewUser = {
        enrid: req.body.enrid,
        fullname: req.body.fullName,
        email: req.body.email,
        branch: req.body.branch,
        password: req.body.password
    };
    try {
        await studentregisterService.CreateNewUser(NewUser);
        return res.redirect("/studentlogin");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/studentregister");
    }
};
module.exports = {
    GetPageRegister: GetPageRegister,
    CreateNewUser: CreateNewUser
};
