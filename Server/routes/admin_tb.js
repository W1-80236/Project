const mysql = require('mysql2');
const express = require('express');
const config  = require('config');

const app =  express.Router();


var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}

//Below code handles Users GET, POST, PUT,DELETE
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from admin_tb";

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


app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   
    var first_name = request.body.first_name;
    var last_name = request.body.last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
   var password  = request.body.password;
   var role  = request.body.role;
    var statement = 
        `insert into admin_tb(first_name,last_name,email,mobile_no, password,role) 
        values('${first_name}', '${last_name}', '${email}','${mobile_no}','${password}','${role}')`;

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

app.put("/:id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.id;//This data belongs to header part 
  
    var first_name = request.body.first_name;//This data belongs to body part 
    var last_name = request.body.last_name;//This data belongs to body part 
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
    var password = request.body.password;
    var role  = request.body.role;


    var statement = 
        `update admin_tb set first_name='${first_name}', last_name='${last_name}',email='${email}', mobile_no='${mobile_no}', password='${password}',role='${role}' where id =${id}`;

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

app.delete("/:id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var id = request.params.id;//This data belongs to header part 
  
    var statement = 
        `delete from admin_tb where id =${id}`;

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

module.exports =app;






