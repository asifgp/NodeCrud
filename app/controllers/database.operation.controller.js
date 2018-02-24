//import { connect } from 'tls';


var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'contactlist'
});
connection.connect();


var insert=function(detail){
    connection.connect();
    var query=`insert into detail(personname,email,phno) values('${detail.name}','${detail.email}','${detail.phno}')`;
    connection.query(query, function (err, result) {
        if (err) throw err;  
        console.log("One Record Inserted");
    });
    connection.end();
}

var remove=function(name){
    connection.connect();
    var query=`delete from detail where personname='${name}'`;
    connection.query(query, function (err, result) {
        if (err) throw err;  
        console.log(name+" Removed");
    });
    connection.end();    
}

var update=function(detail){
    connection.connect();
    var query=`update detail set personname='${detail.name}',email='${detail.email}',phno='${detail.phno}' where personname='${detail.name}'`;
    connection.query(query, function (err, result) {
        if (err) throw err;
        console.log(detail.name+" Updated");
    });
    connection.end();
}


var displayAll=function(req,res){
    var query = `select * from detail`;
    connection.query(query, function (err, result) {
        if (err) throw err;
        res.write(JSON.stringify(result));
        res.end();
    });
}

module.exports={
    update:update,
    displayAll:displayAll,
    insert:insert,
    remove:remove
};




