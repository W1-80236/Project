const mysql = require('mysql2');
const express = require('express');
const config = require('config');
const app = express.Router();

   var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
};

// GET request for bill_tb
app.get("/", (request, response) => {
     var connection = mysql.createConnection(connectionDetails);
     var  statement = "select bill_id, customer_tb.customer_id, bill_tb.dinning_id, total_bill, bill_status,bill_datetime from bill_tb inner join customer_tb on bill_tb.customer_id = customer_tb.customer_id;"

    connection.query(statement, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json(result);
        }
    });
});

// inserting bill details
app.post("/", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
   
   
    var customer_id = request.body.customer_id;
    var dinning_id = request.body.dinning_id;
    var total_bill = request.body.total_bill;
    var bill_status = request.body.bill_status;
    var bill_datetime = request.body.bill_datetime;

  
    var statement = 
        `INSERT INTO bill_tb (customer_id,dinning_id,total_bill,bill_status, bill_datetime ) 
        values('${customer_id}',  '${dinning_id}','${total_bill}','${bill_status}','${bill_datetime}')`;

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



// PUT request for bill_tb
//update bill details
app.put("/:bill_id", (request, response) => {
     var connection = mysql.createConnection(connectionDetails);
     var bill_id = request.params.bill_id;
     
     var { customer_id, dinning_id, total_bill, bill_status } = request.body;

     var statement = "UPDATE bill_tb SET customer_id=?, dinning_id=?, total_bill=?, bill_status=? WHERE bill_id=?";
     var values = [customer_id, dinning_id, total_bill, bill_status, bill_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Bill updated successfully' });
        }
    });
});

// DELETE request for bill_tb
// delete bill by id
app.delete("/:bill_id", (request, response) => {
    const connection = mysql.createConnection(connectionDetails);
    const bill_id = request.params.bill_id;

    const statement = "DELETE FROM bill_tb WHERE bill_id=?";
    const values = [bill_id];

    connection.query(statement, values, (error, result) => {
        connection.end();
        if (error) {
            response.status(500).json({ error: error.message });
        } else {
            response.json({ message: 'Bill deleted successfully' });
        }
    });
});

module.exports = app;
