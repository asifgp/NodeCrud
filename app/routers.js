//import { Router } from "./C:/Users/HomeLab/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express";



//creating express router
const express = require("express"),
app=express(),
router = express.Router(),
maincontroller = require("./controllers/main.controller");
server=require("../server");
DBContact = require("./controllers/database.operation.controller");

var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0
//var upload = multer(); // for parsing multipart/form-data

//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//export above router
module.exports=router;


/**
 * Rendering of Index page
 */
router.get("/",(req,res)=>{
//    res.render(server.dir.view+"/pages/index.html");
    res.render(server.dir.public+"/dist/index.html");
});

/**
 * Rendering of Index page
 */
router.get("/index",(req,res)=>{
//    res.render(server.dir.view+"/pages/index.html");
    res.render(server.dir.public+"/dist/index.html");
    res.end();
});


/**
 * Display All Detail
 */
router.get("/detail/show",function(req,res){
    DBContact.displayAll(req,res);
});


/**
 * Insert new detail
 */
router.post("/detail/add",function(req,res){
    console.log("Inside post : ");
    console.log(req.body);
    DBContact.insert(req.body);
    res.end();
});



//importing router controls from controller files
router.get("/controller",(req,res)=>{
//    maincontroller.showController(req,res);
});



