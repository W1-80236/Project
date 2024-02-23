const mysql = require('mysql2');
const express = require('express');
const config  = require('config');
const utils = require ('../utils');
//const crypto = require('crypto');
const key = config.get("key")
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const app =  express.Router();


var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}

const db = mysql.createConnection({
    host : config.get("server"),
    user : config.get("user"),
    password : config.get("password"),
    database : config.get("database")
})


// admin registration 
app.post("/register", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
   var password  = request.body.password;
   var role = request.body.role;

   const encryptedPassword = String (crypto.SHA256(password));
    console.log(encryptedPassword);


    var statement = 
        `insert into admin_tb(first_name,last_name,email,mobile_no, password,role) 
         values('${first_name}', '${last_name}', '${email}','${mobile_no}','${encryptedPassword}','${role}')`;

        //console.log(statement);
    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }
    })
});

//login login
app.post("/login",(request, response)=>{
    var email = request.body.email;
    var password = request.body.password;

    var encryptedPassword = String(crypto.SHA256(password));
    
   console.log(email +"  "+ encryptedPassword)

   const statement = `select * from admin_tb where email = '${email}' and  password = '${encryptedPassword}'`;
 // const statement = `SELECT * FROM admin_tb WHERE email = ? AND password = ? AND role = 'admin'`;

    db.query(statement,(error, result)=>
    {
        if(error==null)
        {
            //response.send(utils.createResult(error,result));
            if(result.length!=0)
           {
            var payload ={
                          "user_credentials" :result,
                          "createdat" : "05022024"
                         }
            
            var token = jwt.sign(payload,key);
            console.log(token);
            
            var responseMessage ={
                      loginToken :token,
                      message : "success",
                      data : result
                                }
            response.write(JSON.stringify(responseMessage));
                    
            response.end();
           
           }
           else
           {
              response.send(utils.createResult(error,result));  
           }
           
        }
        else{
           console.log(error);
           response.send(utils.createResult(error,result));
        }
    })
   
})


























//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    //var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from admin_tb";

    db.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            db.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
             response.write(JSON.stringify(error));
            db.end();
            response.end();
        }
    })
});


app.post("/", (request, response)=>{
   // var connection = mysql.createConnection(connectionDetails);
   
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
   var password  = request.body.password;
   var role  = request.body.role;
     
   //for making password encrypted
   var encryptedPassword = String(crypto.SHA256(password));
   console.log(encryptedPassword);

    var statement = 
        `insert into admin_tb(first_name,last_name,email,mobile_no, password,role) 
        values('${first_name}', '${last_name}', '${email}','${mobile_no}','${encryptedPassword}','${role}')`;

        //console.log(statement);
    db.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            db.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            db.end();
            response.end();
        }
    })
});

app.put("/:id", (request, response)=>{
   // var connection = mysql.createConnection(connectionDetails);

    var id = request.params.id;//This data belongs to header part 
  
    var first_name = request.body.first_name;//This data belongs to body part 
    var last_name = request.body.last_name;//This data belongs to body part 
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
    var password = request.body.password;
    var role  = request.body.role;

    //for making password encrypted
   var encryptedPassword = String(crypto.SHA256(password));
   console.log(encryptedPassword);


    var statement = 
        `update admin_tb set first_name='${first_name}', last_name='${last_name}',email='${email}', mobile_no='${mobile_no}', password='${encryptedPassword}',role='${role}' where id =${id}`;

    db.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            db.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            db.end();
            response.end();
        }
    })
});

app.delete("/:id", (request, response)=>{
    //var connection = mysql.createConnection(connectionDetails);

    var id = request.params.id;//This data belongs to header part 
  
    var statement = 
        `delete from admin_tb where id =${id}`;

    db.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            db.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(error));
            db.end();
            response.end();
        }
    })
});

module.exports =app;






