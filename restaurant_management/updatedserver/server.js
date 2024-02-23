
const express = require('express');
const config = require('config');
const  utils = require ('./utils');

const cors = require ('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');

const PORT = config.get("port");

//create new react app
const app =  express();
app.use(cors("*"))
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('images'))

// configure protected routes
// app.use((request, response, next) => {
//     const skipUrls = ['/user/signup', '/user/signin']
//     if (skipUrls.findIndex((item) => item == request.url) != -1) {
//       next()
//     } else {
//       const token = request.headers['token']
//       if (!token) {
//         response.send(utils.createError('missing token'))
//       } else {
//         try {
//           const payload = jwt.verify(token, config.secret)
//           request.data = payload
//           next()
//         } catch (ex) {
//           response.send(utils.createError('invalid token'))
//         }
//       }
//     }
//   })


 // add the routes
  const adminRouteHandlerApp = require('./routes/admin_tb');
  const customerRouteHandlerApp = require('./routes/customer_tb');
  const dinningRouteHandlerApp = require('./routes/dinning_tb');
  const foodRouteHandlerApp = require('./routes/food_tb');
  const orderRouteHandlerApp = require('./routes/order_tb');
  const billRouteHandlerApp = require('./routes/bill_tb');
 const cartRouteHandlerApp =require('./routes/cart_tb');


// app.use((request, response,next)=>{
//     //Below line allows calls from any domain / site b'coz of *
//     response.setHeader("Access-Control-Allow-Origin", "*");
    
//     //Below line allows calls with any method GET,PUT,POST, DELETE *
//     response.setHeader("Access-Control-Allow-Methods", "*");

//     //Below line allows calls with any Headers - even custom so *
//     response.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// })

// app.use((request ,response,next)=>
// {
//     console.log(request.url);
//     if(request.url!= '/customer_tb/login' && request.url!='/customer_tb/register')
//     {
//         if(request.headers.authorization != undefined || request.header.authorization != null)
//         {
//             console.log("authorization header recieved is :" + request.headers.authorization);
//             var headerContents = request.headers.authorization.split(" ");
//             var tokenReceived  = headerContents[1];
//             console.log(tokenReceived);
//             var payloadDecodeFromToken = jwt.verify(tokenReceived,key);
//             if(payloadDecodeFromToken.createdat == "05022024")
//             {
//                 console.log(payloadDecodeFromToken.createdat);
//                 next();
//             }
//             else{
//                 response.send("invalid token");
//             }
           
//         }
//         else{
//             response.send("token needed!!");
//         }
//     }
//     else{
//         next();
//     }
// })


app.use("/admin_tb", adminRouteHandlerApp);
app.use("/customer_tb", customerRouteHandlerApp);
app.use("/dinning_tb",  dinningRouteHandlerApp); 
app.use("/food_tb",  foodRouteHandlerApp);
app.use("/order_tb",  orderRouteHandlerApp);
app.use("/bill_tb",  billRouteHandlerApp);
app.use("/cart_tb", cartRouteHandlerApp);
 
app.listen(PORT, ()=>{console.log(`server started listening at port ${PORT}`);});




// const express = require('express')
// const cors = require('cors')
// const morgan = require('morgan')
// const jwt = require('jsonwebtoken')
// const config = require('./config')
// const utils = require('./utils')

// // create new react app
// const app = express()
// app.use(cors())
// app.use(morgan('combined'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static('images'))

// // configure protected routes
// app.use((request, response, next) => {
//   const skipUrls = ['/user/signup', '/user/signin']
//   if (skipUrls.findIndex((item) => item == request.url) != -1) {
//     next()
//   } else {
//     const token = request.headers['token']
//     if (!token) {
//       response.send(utils.createError('missing token'))
//     } else {
//       try {
//         const payload = jwt.verify(token, config.secret)
//         request.data = payload
//         next()
//       } catch (ex) {
//         response.send(utils.createError('invalid token'))
//       }
//     }
//   }
// })

// // add the routes
// const adminRouter = require('./routes/admin_tb')
// const customerRouter = require('./routes/customer_tb')
// const dinningRouter = require('./routes/dinning_tb')
// const foodRouter = require('./routes/food_tb')
// const orderRouter = require('./routes/order_tb')
// const billRouter = require('./routes/bill_tb')

// app.use('/admin_tb', adminRouter)
// app.use('/customer_tb', customerRouter)
// app.use('/dinning_tb', dinningRouter)
// app.use('/food_tb', foodRouter)
// app.use('/order_tb', orderRouter)
// app.use('/bill_tb', billRouter)

// app.listen(9898, '0.0.0.0', () => {
//   console.log('server started on port 9898')
// })












































