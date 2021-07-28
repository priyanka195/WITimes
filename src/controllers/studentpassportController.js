const passportLocal = require("passport-local");
const passport= require("passport");
const studentloginService = require("../services/studentloginService");

let localStrategy = passportLocal.Strategy;

let InitPassportLocal = () => {
    passport.use(new localStrategy({
            usernameField: 'enrid',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, enrid, password, done) => {
            try {
                await studentloginService.FindUserByEnrid(enrid).then(async (user) => {
                    if (!user) {
                        return done(null, false, req.flash("errors", `This user enrollment ID "${enrid}" doesn't exist`));
                    }
                    if (user) {
                        let match = await studentloginService.ComparePassword(password, user);
                        if (match === true) {
                            return done(null, user, null)
                        } else {
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    studentloginService.FindUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = InitPassportLocal;