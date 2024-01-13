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

// Below code handles GET request for food_tb
app.get("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var statement = "select * from food_tb";

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

// Handle POST request for food_tb
//app.post("/food_tb", (request, response)=>{
   // var connection = mysql.createConnection(connectionDetails);
    
    //var food_name = request.body.food_name;
    //var food_price = request.body.food_price;
    //var food_type = request.body.food_type;

    //var statement = 
      //  `insert into food_tb(food_name, food_price, food_type) 
        //values('${food_name}', '${food_price}', '${food_type}')`;

    //connection.query(statement, (error, result)=>{
      //  if(error==null)
        //{
          //  response.setHeader("Content-Type", "application/json");
           // response.write(JSON.stringify(result));
            //connection.end();
            //response.end();
        //}
        //else
        //{
          //  response.setHeader("Content-Type", "application/json");
            //response.write(JSON.stringify(error));
            //connection.end();
            //response.end();
        //}
    //})
//});

// Handle PUT request for food_tb
//app.put("/:food_id", (request, response)=>{
  //  var connection = mysql.createConnection(connectionDetails);

    //var food_id = request.params.food_id;
    //var food_name = request.body.food_name;
    //var food_price = request.body.food_price;
    //var food_type = request.body.food_type;

    //var statement = 
      //  `update food_tb set food_name='${food_name}', food_price=${food_price}, food_type='${food_type}' where food_id =${food_id}`;

    //connection.query(statement, (error, result)=>{
      //  if(error==null)
        //{
          //  response.setHeader("Content-Type", "application/json");
            //response.write(JSON.stringify(result));
            //connection.end();
            //response.end();
        //}
        //else
        //{
          //  response.setHeader("Content-Type", "application/json");
            //response.write(JSON.stringify(error));
            //connection.end();
            //response.end();
        //}
    //})
//});

// Handle DELETE request for food_tb
//app.delete("/:food_id", (request, response)=>{
  //  var connection = mysql.createConnection(connectionDetails);

    //var food_id = request.params.food_id;
  
    //var statement = 
      //  `delete from food_tb where food_id =${food_id}`;

    //connection.query(statement, (error, result)=>{
      //  if(error==null)
       // {
         //   response.setHeader("Content-Type", "application/json");
           // response.write(JSON.stringify(result));
            //connection.end();
            //response.end();
        //}
        //else
        //{
          //  response.setHeader("Content-Type", "application/json");
            //response.write(JSON.stringify(error));
            //connection.end();
            //response.end();
        //}
    //})
//});

module.exports = app;
