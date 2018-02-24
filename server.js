require("dotenv").config();


//dependenies
const express = require("express"),
app=express(), 
port=process.env.PORT||8008,
mysql=require("mysql"),
bodyparser=require('body-parser');


//body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


//setting template engine
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);


//configure application
//---Static files for application
app.use('/public',express.static(__dirname+'/public'));
app.use('/views',express.static(__dirname+'/views'));


module.exports={
    dir:{
        view:__dirname+"/views",
        public:__dirname+"/public"
    }
}



//set routers
app.use(require("./app/routers"));


//start server
app.listen(port,()=>{
    console.log(`Server is runing at port:${port}`);
});










