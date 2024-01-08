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

   var statement = "select dinning_id, dinning_name, first_name, last_name, email, mobile_no, role from dinning_tb inner join admin_tb on dinning_tb.id = admin_tb.id";

                   
                                 
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


// app.post("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);
      
//     var dinning_id=request.body.dinning_id;
//     var dinning_name = request.body.dinning_name;
    
//     var statement = 
//         `insert into dinning_tb( dinning_id,dinning_name) 
//         values('${dinning_id}','${dinning_name}')`;

//         //console.log(statement);
//     connection.query(statement, (error, result)=>{
//         if(error==null)
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(result));
//             connection.end();
//             response.end();
//         }
//         else
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });


// app.put("/:dinning_id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var dinning_id = request.params.dinning_id;//This data belongs to header part 
//     var dinning_name = request.body.dinning_name;//This data belongs to body part 
    
//     var statement = 
//         `update  dinning_tb set dinning_name='${dinning_name}' where dinning_id =${dinning_id}`;

//     connection.query(statement, (error, result)=>{
//         if(error==null)
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(result));
//             connection.end();
//             response.end();
//         }
//         else
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });

// app.delete("/:dinning_id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var dinning_id = request.params.dinning_id;//This data belongs to header part 
  
//     var statement = 
//         `delete from  dinning_tb  where dinning_id =${dinning_id}`;

//     connection.query(statement, (error, result)=>{
//         if(error==null)
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(result));
//             connection.end();
//             response.end();
//         }
//         else
//         {
//             response.setHeader("Content-Type", "application/json");
//             response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });

















module.exports =app;