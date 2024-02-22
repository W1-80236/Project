
const mysql = require('mysql');
const express = require('express');
const config  = require('config');
const utils = require('../utils');
const key = config.get("key");
const app =  express.Router();
const jwt = require('jsonwebtoken'); // jsonwebToken for login validation
const crypto = require('crypto-js'); // for encrypted password

var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}

//for fething all the customers data
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

app.post("/register", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var cust_first_name = request.body.cust_first_name;
    var cust_last_name = request.body.cust_last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
   var password  = request.body.password;

   const encryptedPassword = String (crypto.SHA256(password));
    console.log(encryptedPassword);


    var statement = 
        `insert into customer_tb(cust_first_name,cust_last_name,email,mobile_no, password) 
         values('${cust_first_name}', '${cust_last_name}', '${email}','${mobile_no}','${encryptedPassword}')`;

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

//customer login
app.post("/login", (request, response)=>{
    console.log("login done")
    var connection = mysql.createConnection(connectionDetails);
    var email = request.body.email;
    var password  = request.body.password;
    var encryptedPassword = String(crypto.SHA256(password));
    console.log(email);
    console.log(encryptedPassword);
    console.log(password);
    var statement = 
        `select * from customer_tb where email='${email}' && password='${encryptedPassword}'`; 
        console.log(statement)
    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            if(result.length!=0){
                var payload={
                    "customer_credentials":result,
                    "createdat" : "05022024"
                }
                var token = jwt.sign(payload,key);
                console.log(token);
                var responseMessage ={
                    loginToken :token,
                    status : "success",
                  data : result
                              }
          response.write(JSON.stringify(responseMessage));
          connection.end();
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
 
});


// for updating customers data in future if he has changed his email, mobile
app.put("/:customer_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var customer_id = request.params.customer_id;
    var cust_first_name = request.body.cust_first_name; 
    var cust_last_name = request.body.cust_last_name;
    var email = request.body.email;
    var mobile_no = request.body.mobile_no;
    var password = request.body.password;
    var encryptedPassword = String(crypto.SHA256(password));
    
    var statement = 
       `update customer_tb set cust_first_name='${cust_first_name}', cust_last_name='${cust_last_name}',email='${email}', mobile_no='${mobile_no}', password='${encryptedPassword}' where customer_id =${customer_id}`;


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
// if user forgot the password or if he want to change the password
app.put("/resetpassword/:email",(request, response)=>{
    var connection = mysql.createConnection(connectionDetails);
    var email = request.params.email;
    const {password,newPassword} = request.body;
    var encryptedPassword = String(crypto.SHA256(password));
    
    console.log(email);

    var statement = 
    `update customer_tb set password='${encryptedPassword}' where email='${email}'`;
    //const values = [encryptedPassword, email];

    console.log(statement);
    connection.query(statement, (error, result)=>{
        if(error==null)
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(utils.createResult(error,result)));
            console.log(result)
            connection.end();
            response.end();
        }
        else
        {
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(utils.createResult(error,result)));
            connection.end();
            response.end();
        }
    })
});

app.delete("/:customer_id", (request, response)=>{
    var connection = mysql.createConnection(connectionDetails);

    var customer_id = request.params.customer_id;
  
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





























































































































// const mysql = require('mysql2');
// const express = require('express');
// const config  = require('config');
// //const db = require('db')
// const cryptoJs = require('crypto-js');
// const jwt = require('jsonwebtoken');

// const app =  express.Router();


// var connectionDetails = {
//     host: config.get("server"),
//     database: config.get("database"),
//     user: config.get("user"),
//     password: config.get("password")
// }

// // app.post('/signup', async(request, response) =>{
   
// //     const { cust_first_name, cust_last_name,email, password } = request.body
    
// //     try{
// //         const encryptedPassword = String(cryptoJs.SHA256(password))
// //         const statement = `insert into customer_tb(cust_first_name, cust_last_name, email, password) values (?, ?, ?, ?)`
          
// //         const result = await db.execute(statement,[cust_first_name, cust_last_name, email, encryptedPassword])
// //         response.send(utils.createSuccess(result))
// //     } catch(ex){
// //         response.send(utils.createError(ex))
// //     }
// // })

// // app.post('/signin', async(request, response) =>{
// //      const {email, password} =request.body
// //     try{
// //         const encryptedPassword = String(cryptoJs.SHA256(password))
// //         console.log(encryptedPassword)
// //         const statement = `select customer_id, cust_first_name, cust_last_name,mobile_no,  where email = ? and password = ?`
       
// //       const[customer_tb] = await db.execute(statement,[email,encryptedPassword] )
// //       if(customer_tb == 0){
// //         response.send(utils.createError('invalid  customer name  or password'))
// //       } else {
// //         const customer = customer_tb[0]
// //         const token = jwt.sign(
// //             {
// //                customer_id: customer['customer_id'],
// //                cust_first_name:customer['cust_first_name'],

// //             },
// //             config.secret
// //         )
// //        response.send(
// //         utils.createSuccess({
// //             token,
// //             cust_first_name:customer['cust_first_name'],
// //             cust_last_name: customer['cust_last_name'],

// //         })
// //        )


// //       }
// //       } catch (ex){
// //         response.send(utils.createError(ex))

// //       }

// // })



// //Below code handles Users GET, POST, PUT,DELETE
// app.get("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var statement = "select * from customer_tb";

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
//              response.write(JSON.stringify(error));
//             connection.end();
//             response.end();
//         }
//     })
// });



// app.post("/", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);
    
//     var cust_first_name = request.body.cust_first_name;
//     var cust_last_name = request.body.cust_last_name;
//     var email = request.body.email;
//     var mobile_no = request.body.mobile_no;
//    var password  = request.body.password;

//     var statement = 
//         `insert into customer_tb(cust_first_name,cust_last_name,email,mobile_no, password) 
//         values('${cust_first_name}', '${cust_last_name}', '${email}','${mobile_no}','${password}')`;

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


    
    
    
    
    
    








// app.put("/:customer_id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var customer_id = request.params.customer_id;//This data belongs to header part 
  
//     var cust_first_name = request.body.cust_first_name;//This data belongs to body part 
//     var cust_last_name = request.body.cust_last_name;//This data belongs to body part 
//     var email = request.body.email;
//     var mobile_no = request.body.mobile_no;
//     var password = request.body.password;



//     var statement = 
//         `update customer_tb set cust_first_name='${cust_first_name}', cust_last_name='${cust_last_name}',email='${email}', mobile_no='${mobile_no}', password='${password}' where customer_id =${customer_id}`;

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

// app.delete("/:customer_id", (request, response)=>{
//     var connection = mysql.createConnection(connectionDetails);

//     var customer_id = request.params.customer_id;//This data belongs to header part 
  
//     var statement = 
//         `delete from customer_tb where customer_id =${customer_id}`;

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

// module.exports =app;

