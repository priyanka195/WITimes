//jshint esversion:8
let handleHelloWorld = async (req, res) => {
    return res.render("hackathon.ejs",{
        user: req.user
    });
};

module.exports = {
    
    handleHelloWorld: handleHelloWorld,
};
