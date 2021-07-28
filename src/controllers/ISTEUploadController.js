//jshint esversion:8
let handleHelloWorld = async (req, res) => {
    return res.render("ISTEUpload.ejs",{
        user: req.user
    });
};

module.exports = {
    
    handleHelloWorld: handleHelloWorld,
};
