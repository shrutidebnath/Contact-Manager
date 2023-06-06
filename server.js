//console.log("i am in express project");

const express = require("express");//header of express
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
connectDb();
const app = express();

// const errorHandler = require("./middleware/errorHandler");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5001;//creater server on port 5000
app.use(express.json());//to parse the input data n print it

//we might breakup the ffollowing 2nd parameter as const contactRoutes=require("./routes/contactRoutes")
app.use("/api/contacts", require('./routes/contactRoutes'));//app.use mddleware - 1st paramter defines the common route for every app.get, 2nd parameter defines we need to import the contactRoutes file from the routes folder for all the app.get url paths 
app.use("/api/users", require('./routes/userRoutes'));//app.use mddleware - 1st paramter defines the common route for every app.get, 2nd parameter defines we need to import the contactRoutes file from the routes folder for all the app.get url paths 

app.use(errorHandler);
app.listen(port, () => {  //app.listen to listen to incoming http requests on the specified port and the callback function will be executed
    console.log(`server running on port ${port}`);
});
