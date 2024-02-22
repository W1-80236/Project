const mysql = require('mysql2');
const express = require('express');
const config  = require('config');
const multer = require("multer");
const path = require('path');
const utils = require('../utils');
const fs = require('fs');
const app =  express.Router();
const { error } = require('console');

var connectionDetails = {
    host: config.get("server"),
    database: config.get("database"),
    user: config.get("user"),
    password: config.get("password")
}

app.get("/fooddetails", (request, response)=>{

  var connection = mysql.createConnection(connectionDetails);

  var statement = "select food_id, food_name, food_price, food_type, image from food_tb";

  connection.query(statement, (error, result)=>{
      if(error==null)
      {
        response.setHeader("Content-Type", "application/json");
            //response.write(JSON.stringify(result));
            //connection.end();
            //response.end();
            response.send(utils.createResult(error,result));
        console.log(result)
          // response.setHeader("Content-Type", "application/json");
          // response.send(result);
      }
      else
      {
        console.log("error")
          response.setHeader("Content-Type", "application/json");
          response.send(utils.createResult(error,result));
          // response.write(JSON.stringify(error));
          // connection.end();
          // response.end();
      }
  })
});


//multer 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
    destination :(req,file, cb)=>{
        cb(null,'uploads/');
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+ '-'+file.originalname);
    },
});


const fileFilter = function (req, file, cb) {
    const allowedFileTypes = /jpeg||jpg||png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
 
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      return cb(new Error('Only PNG and JPG  and JPEG files are allowed!'), false);
    }
  };

  const upload = multer({ storage: storage, fileFilter: fileFilter });

//get names all images
app.get('/images', (req, res) => {
    fs.readdir('uploads', (err, files) => {
      if (err) {
        return res.status(500).send('Error reading the directory.');
      }
 
      const images = files.filter(file => path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.jpeg');
      res.status(200).json({ images });
    });
  });

  //get all image by image name
  app.get('/images/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    // const imagePath = path.join(__dirname, 'uploads', imageName);
    const imagePath = path.join(__dirname, '..', 'uploads', imageName);
    console.log('Image Path:', imagePath);
    res.sendFile(imagePath, (err) => {
      if (err) {
        res.status(500).send('Error sending the file.?');
      }
    });
  });

  //insert all data in food_tb table including the image through form-data
// app.post('/addfood', upload.single('image'), (req, res) => {
//     const { food_id,food_name,food_price, food_type} = req.body;
   
//     var connection = mysql.createConnection(connectionDetails);
//     const image = req.file ? req.file.filename : null;
 
//     const query = 'INSERT INTO food_tb (food_id,food_name, food_price, food_type, image ) VALUES (?,?, ?, ?, ?)';
//     const values = [food_id,food_name, food_price, food_type, image];
//    console.log(query)
//     connection.query(query, values, (err, result) => {
//       if (err) {
//         console.error('Error inserting :', err);
//         return res.status(500).json({ success: false, error: 'Internal Server Error' });
//       }
 
//       const foodId = result.insertId;
//       res.status(201).json({ success: true, message: 'fooditem created successfully', foodId });
//     });
//   });
app.post('/addfood', upload.single('image'), (req, res) => {
  try {
      const { food_id, food_name, food_price, food_type } = req.body;
      const image = req.file ? req.file.filename : null;

      var connection = mysql.createConnection(connectionDetails);

      const query = 'INSERT INTO food_tb (food_id, food_name, food_price, food_type, image) VALUES (?, ?, ?, ?, ?)';
      const values = [food_id, food_name, food_price, food_type, image];

      console.log(query);

      connection.query(query, values, (err, result) => {
          if (err) {
              console.error('Error inserting:', err);
              return res.status(500).json({ success: false, error: 'Internal Server Error' });
          }

          const foodId = result.insertId;
          res.status(201).json({ success: true, message: 'Food item created successfully', foodId });
      });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

//update 
  app.put('/food_tb/id', upload.single('image'), (req, res) => {
    const { image } = req.body;
    const food_id = req.params.food_id;
   
    // const image1 = req.file ? req.file.filename : null;
 
    const query = 'update food_tb set image=? where food_id = ?';
    const values = [image, food_id];
 
   connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating product:', err);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
 
      const food_id = result.insertId;
      res.status(201).json({ success: true, message: ' fooditem updated successfully', productId });
    });
  });



//Handle POST request for food_tb
// insert food name , price, and type 
app.post("/", (request, response)=>{
   var connection = mysql.createConnection(connectionDetails);
    
     var food_id = request.body.food_id;
    var food_name = request.body.food_name;
    var food_price = request.body.food_price;
    var food_type = request.body.food_type;
    var image = request.body.image;

    var statement = 
       `insert into food_tb(food_id,food_name, food_price, food_type, image) 
        values( '${food_id}','${food_name}', '${food_price}', '${food_type}', '${image}')`;

    connection.query(statement, (error, result)=>{
       if(error==null)
        {
           response.setHeader("Content-Type", "application/json");
          //  response.write(JSON.stringify(result));
          //   connection.end();
          //   response.end();
          response.send(utils.createResult(error,result));
        }
        else
        {
           response.setHeader("Content-Type", "application/json");
            // response.write(JSON.stringify(error));
            // connection.end();
            // response.end();
            response.send(utils.createResult(error,result));
        }
    })
});

// // Handle PUT request for food_tb
// // update food item with the help of id
// app.put("/:food_id", (request, response)=>{
//    var connection = mysql.createConnection(connectionDetails);

//     var food_id = request.params.food_id;

//     var food_name = request.body.food_name;
//     var food_price = request.body.food_price;
//     var food_type = request.body.food_type;
//    //
//    console.log(request.body)
//   // var image = request.body.image;
//   const image = request.file ? request.file.filename : null;

//     var statement = 
//        `update food_tb set food_name= '${food_name}', food_price=${food_price}, food_type='${food_type}', image ='${image}' where food_id =${food_id}`;
     

//        console.log(statement)


//     connection.query(statement, (error, result)=>{
//        if(error==null)
//         {
//            response.setHeader("Content-Type", "application/json");
//             // response.write(JSON.stringify(result));
//             // connection.end();
//             // response.end();
//             response.send(utils.createResult(error,result));
//         }
//         else
//         {
//            response.setHeader("Content-Type", "application/json");
//             // response.write(JSON.stringify(error));
//             // connection.end();
//             // response.end();
//             response.send(utils.createResult(error,result));
//         }
//     })
// });

// Handle DELETE request for food_tb
app.delete("/:food_id", (request, response)=>{
   var connection = mysql.createConnection(connectionDetails);

    var food_id = request.params.food_id;
  
    var statement = 
       `delete from food_tb where food_id =${food_id}`;

    connection.query(statement, (error, result)=>{
       if(error==null)
       {
           response.setHeader("Content-Type", "application/json");
          //  response.write(JSON.stringify(result));
          //   connection.end();
          //   response.end();
          response.send(utils.createResult(error,result));
        }
        else
        {
           response.setHeader("Content-Type", "application/json");
            // response.write(JSON.stringify(error));
            // connection.end();
            // response.end();
            response.send(utils.createResult(error,result));
        }
    })
});

module.exports = app;