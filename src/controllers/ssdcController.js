//jshint esversion:8
let handleHelloWorld = async (req, res) => {
    return res.render("ssdc.ejs",{
        user: req.user
    });
};

module.exports = {
    
    handleHelloWorld: handleHelloWorld,
};
