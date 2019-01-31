const express = require ('express');
const bodyParser = require ('body-parser');

const path = require ('path')

const app = express();

const PORT = process.env.PORT || 4000;

//body-parser
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json());

//Route
require('./routes/html')(app)

//server
app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT)
});