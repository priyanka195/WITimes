const {ValidationResult } = require("express-validator");
const studentloginService = require("../services/studentloginService");

let GetPageLogin = (req, res) => {
    return res.render("studentlogin.ejs", {
        errors: req.flash("errors")
    });
};

let HandleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = ValidationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/studentlogin");
    }

    try {
        await studentloginService.HandleLogin(req.body.email, req.body.password);
        return res.redirect("/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/studentlogin");
    }
};

let CheckLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/studenthomepage");
    }
    next();
};

let CheckLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let PostLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/");
    });
};

module.exports = {
    GetPageLogin: GetPageLogin,
    HandleLogin: HandleLogin,
    CheckLoggedIn: CheckLoggedIn,
    CheckLoggedOut: CheckLoggedOut,
    PostLogOut: PostLogOut
};
