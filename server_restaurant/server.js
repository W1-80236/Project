const express = require('express');
const config = require('config');

const PORT = config.get("port");


const adminRouteHandlerApp = require('./routes/admin_tb');
const customerRouteHandlerApp = require('./routes/customer_tb');
const dinningRouteHandlerApp = require('./routes/dinning_tb');
//const foodRouteHandlerApp = require('./routes/food_tb');
//const orderRouteHandlerApp = require('./routes/order_tb');
//const billRouteHandlerApp = require('./routes/bill_tb');


const app =  express();

app.use((request, response,next)=>{
    //Below line allows calls from any domain / site b'coz of *
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    //Below line allows calls with any method GET,PUT,POST, DELETE *
    response.setHeader("Access-Control-Allow-Methods", "*");

    //Below line allows calls with any Headers - even custom so *
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json());
app.use("/admin_tb", adminRouteHandlerApp);
app.use("/customer_tb", customerRouteHandlerApp);
app.use("/dinning_tb",  dinningRouteHandlerApp); 
//app.use("/food_tb",  foodRouteHandlerApp);
//app.use("/order_tb",  orderRouteHandlerApp);
//app.use("/bill_tb",  billRouteHandlerApp);

app.listen(PORT, ()=>{console.log(`server started listening at port ${PORT}`);});


