// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require ("express");
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server and listening function to make sure server is running.
const port = 8000 ;
const server = app.listen(port,listening);
function listening(){
    console.log(`The server is running at local host ${port}`);
}
const dataServer=[];
// function to get data
app.get("/all",(req,res)=>{
    console.log("Get Data");
res.send(projectData);
})
// function to post data
app.post("/add",(req,res)=>{
    console.log(projectData)
    res.send(projectData);
})
