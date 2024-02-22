const mysql = require('mysql2');
const express = require('express');
const config  = require('config');
const utils = require('../utils');
const app =  express.Router();


var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}


app.get("/getCart/:customer_id", (request, response)=>{
  var connection = mysql.createConnection(connectionDetails);
   var statement = "select * from food_tb inner join cart_tb on food_tb.food_id=cart_tb.food_id where customer_id=?";
   const { customer_id } = request.params;
   const values = [customer_id];
  connection.query(statement,values ,(error, result)=>{
      if(error==null)
      {
        response.setHeader("Content-Type", "application/json");
        response.send(utils.createResult(error,result));
           console.log(result)
      }
      else
      {
        console.log("error")
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
          
      }
  })
});

app.post("/addCart",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    const {customer_id,food_id,quantity,price, total} = request.body;

    const statement="insert into cart_tb(customer_id,food_id,quantity,price,total) values(?,?,?,?,?)";
    const values = [customer_id,food_id,quantity,price,total];
    connection.query(statement,values ,(error, result)=>{
        if(error==null)
        {
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
             console.log(result)
        }
        else
        {
          console.log("error")
            response.setHeader("Content-Type", "application/json");
            response.send(utils.createResult(error,result));
            
        }
    })
});



// //updating qty of foodMenu
// //patch is used when we want to update an small part not entire part//if we wish entire then use post
 app.patch("/updateCart/:customer_id/:quantity",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
    const {customer_id,quantity} = request.params;

     const statement="update cart_tb set quantity=? where customer_id=?";
     const values = [quantity,customer_id];

     connection.query(query,values,(err,result)=>{
        if(error==null)
        {
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
             console.log(result)
        }
        else
        {
          console.log("error")
            response.setHeader("Content-Type", "application/json");
            response.send(utils.createResult(error,result));
            
        }
    })
});


// // delete cart by id for particular customer_id(by its id)
 
app.delete("/deleteCart/:food_id/:customer_id",(request,response)=>{
    var connection = mysql.createConnection(connectionDetails);
     const { customer_id , food_id } = request.params;


     const statement = "delete from cart_tb where customer_id=? and food_id=?"
     const values = [customer_id,food_id]

     connection.query(statement,values,(error,result)=>{
        if(error==null)
        {
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
             console.log(result)
        }
        else
        {
          console.log("error")
            response.setHeader("Content-Type", "application/json");
            response.send(utils.createResult(error,result));
            
        }
    
 });

});
app.get('/getOrder/:id', (request, response) => {
    var connection = mysql.createConnection(connectionDetails);
  const { order_id } = request.params
  const statement = "select * from orderDetails where order_id=?"
  const values = [ order_id ]
     connection.query(statement,values,(err,result)=>{
        if(error==null)
        {
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
             console.log(result)
        }
        else
        {
          console.log("error")
            response.setHeader("Content-Type", "application/json");
            response.send(utils.createResult(error,result));
            
        }
});

})






module.exports=app;