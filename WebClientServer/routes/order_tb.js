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

    var statement = "select order_id,customer_tb.customer_id,  food_id, dinning_tb.dinning_id,quantity,food_total,order_datetime , admin_tb.id  from  order_tb, customer_tb ,dinning_tb, admin_tb  where order_tb.customer_id = customer_tb.customer_id";
    

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


app.post("/placeorder", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   
    var customer_id = request.body.customer_id;
    var food_id = request.body.food_id;
    var dinning_id = request.body.dinning_id;
    var quantity = request.body.quantity;
    var  food_total = request.body.food_total;
    var order_datetime = request.body.order_datetime;
    var id = request.body.id;

  
    var statement = 
        `INSERT INTO order_tb (customer_id, food_id, dinning_id, quantity, food_total,order_datetime, id) 
        values('${customer_id}', '${food_id}', '${dinning_id}','${quantity}','${food_total}','${order_datetime}', '${id}')`;

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



app.put("/:order_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var order_id = request.params.order_id;//This data belongs to header part 
  
    var quantity = request.body.quantity;
    var  food_total = request.body.food_total;
    var order_datetime = request.body.order_datetime;
    var id = request.body.id;


    var statement = 
        `update order_tb set quantity='${quantity}', food_total='${food_total}',order_datetime='${order_datetime}', id='${id}'  where order_id =${order_id}`;

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

app.delete("/:order_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var order_id = request.params.order_id;//This data belongs to header part 
  
    var statement = 
        `delete from order_tb where order_id =${order_id}`;

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






