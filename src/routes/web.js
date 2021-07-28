//jshint esversion:8
import express from "express";
//import indexController from "../controllers/indexController";
import homePageController from "../controllers/homePageController";
import uploadNoticeController from "../controllers/uploadNoticeController";
import ssdcController from "../controllers/ssdcController";
import ssdcregisterController from "../controllers/ssdcregisterController";
import ssdcuploadController from "../controllers/ssdcuploadController";
import isteController from "../controllers/isteController";
import witcharController from "../controllers/witcharController";
import witcharregisterController from "../controllers/witcharregisterController";
import hackathonregisterController from "../controllers/hackathonregisterController";
import hackathonController from "../controllers/hackathonController";
import ISTEUploadController from "../controllers/ISTEUploadController";
import isteRegisterController from "../controllers/isteRegisterController";
import nssnoticeController from "../controllers/nssnoticeController";
import tnpregisterController from "../controllers/tnpregisterController";
import witechregisterController from "../controllers/witechregisterController";
import witechuploadController from "../controllers/witechuploadController";
import witechController from "../controllers/witechController";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";
import eventsController from "../controllers/eventsController";
 

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/",(req,res)=>{
        res.render("index")
    });
     
    //router.get("/index", indexController.handleindex, loginController.checkLoggedIn);
    router.get("/homepage", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/uploadnotice", loginController.checkLoggedIn, uploadNoticeController.handleHelloWorld);
    router.get("/ssdc", loginController.checkLoggedIn, ssdcController.handleHelloWorld);
    router.get("/ssdcregister", loginController.checkLoggedIn, ssdcregisterController.handleHelloWorld);
    router.get("/SSDCupload", loginController.checkLoggedIn, ssdcuploadController.handleHelloWorld);
    router.get("/witchar", loginController.checkLoggedIn, witcharController.handleHelloWorld);
    router.get("/witcharregister", loginController.checkLoggedIn, witcharregisterController.handleHelloWorld);
    router.get("/witechregister", loginController.checkLoggedIn, witechuploadController.handleHelloWorld);
    router.get("/witech", loginController.checkLoggedIn, witechController.handleHelloWorld);
    router.get("/ISTE", loginController.checkLoggedIn, isteController.handleHelloWorld);
    router.get("/isteRegister", loginController.checkLoggedIn, isteRegisterController.handleHelloWorld);
    router.get("/hackathon", loginController.checkLoggedIn, hackathonController.handleHelloWorld);
    router.get("/hackathonregister", loginController.checkLoggedIn,  hackathonregisterController.handleHelloWorld);
    router.get("/ISTEUpload", loginController.checkLoggedIn,  ISTEUploadController.handleHelloWorld);
    router.get("/nssnotice", loginController.checkLoggedIn,  nssnoticeController.handleHelloWorld);
    router.get("/tnpnotice", loginController.checkLoggedIn,  tnpregisterController.handleHelloWorld);
    router.get("/WITechnotice", loginController.checkLoggedIn,  witechregisterController.handleHelloWorld);
    router.get("/events", loginController.checkLoggedIn, eventsController.handleHelloWorld);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/homepage",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true

    
    }));
    router.get("/curricular",(req,res)=>{
        res.render("curricular")
    });
    router.get("/uploadnotice",(req,res)=>{
        res.render("uploadnotice")
    });
    router.get("/noticeboard",(req,res)=>{
        res.render("noticeboard")
    });
    
    
    router.get("/commonnotice",(req,res)=>{
        res.render("commonnotice")
    });
    router.get("/display",(req,res)=>{
        res.render("display")
    });
    router.get("/tnpnotice",(req,res)=>{
        res.render("tnpnotice")
    });
    router.get
    router.get("/tnpdisplay",(req,res)=>{
        res.render("tnpdisplay")
    });
    router.get("/nssnotice",(req,res)=>{
        res.render("nssnotice")
    });
    router.get("/nssdisplay",(req,res)=>{
        res.render("nssdisplay")
    });
    router.get("/events",(req,res)=>{
        res.render("events")
    });
    router.get("/ISTEUpload",(req,res)=>{
        res.render("ISTEUpload")
    });
    router.get("/SSDCUpload",(req,res)=>{
        res.render("SSDCUpload")
    });
    router.get("/WITechnotice",(req,res)=>{
        res.render("WITechnotice")
    });
    router.get("/ssdc",(req,res)=>{
        res.render("ssdc")
    });
    router.get("/hackathon",(req,res)=>{
        res.render("hackathon")
    });
    router.get("/witchar",(req,res)=>{
        res.render("witchar")
    });
    router.get("/ssdcregister",(req,res)=>{
        res.render("ssdcregister")
    });
    router.get("/ssdcevent",(req,res)=>{
        res.render("ssdcevent")
    });
    router.get("/isteRegister",(req,res)=>{
        res.render("IsteRegister")
    });
    router.get("/myupload",(req,res)=>{
        res.render("myupload")
    });
    router.get("/eventdisplay",(req,res)=>{
        res.render("eventdisplay")
    });
    router.get("/witech",(req,res)=>{
        res.render("witech")
    });  router.get("/witechregister",(req,res)=>{
        res.render("witechregister")
    });
    router.get("/witechevent",(req,res)=>{
        res.render("witechevent")
    });
    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    return app.use("/", router);

    
    
};
module.exports = initWebRoutes;
