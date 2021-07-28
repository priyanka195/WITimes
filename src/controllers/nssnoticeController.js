//jshint esversion:8
let handleHelloWorld = async (req, res) => {
    return res.render("nssnotice.ejs",{
        user: req.user
    });
};

module.exports = {
    
    handleHelloWorld: handleHelloWorld,
};
