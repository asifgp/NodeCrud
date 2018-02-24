

var showController=function(req,res){
        res.end("Inside controller");
}


module.exports={
    showController:showController,
    showHome:function(req,res){
        res.render("../../views/pages/home.html");
    }
};



