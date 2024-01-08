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

    var statement = "select * from customer_tb";

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
    
    var cust_first_name = request.body.cust_first_name;
    var cust_last_name = request.body.cust_last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
   var password  = request.body.password;

    var statement = 
        `insert into customer_tb(cust_first_name,cust_last_name,email,mobile_no, password) 
        values('${cust_first_name}', '${cust_last_name}', '${email}','${mobile_no}','${password}')`;

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

app.put("/:customer_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var customer_id = request.params.customer_id;//This data belongs to header part 
  
    var cust_first_name = request.body.cust_first_name;//This data belongs to body part 
    var cust_last_name = request.body.cust_last_name;//This data belongs to body part 
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
    var password = request.body.password;



    var statement = 
        `update customer_tb set cust_first_name='${cust_first_name}', cust_last_name='${cust_last_name}',email='${email}', mobile_no='${mobile_no}', password='${password}' where customer_id =${customer_id}`;

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

app.delete("/:customer_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var customer_id = request.params.customer_id;//This data belongs to header part 
  
    var statement = 
        `delete from customer_tb where customer_id =${customer_id}`;

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

