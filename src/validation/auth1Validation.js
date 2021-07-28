const { check } = require("express-validator");

let ValidateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password must be at least 2 chars long")
    .isLength({ min: 2 }),

    check("passwordConfirmation", "Password confirmation does not match password")
    .custom((value, { req }) => {
        return value === req.body.password
    })
];

let ValidateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password")
    .not().isEmpty()
];

module.exports = {
    ValidateRegister: ValidateRegister,
    ValidateLogin: ValidateLogin
};
