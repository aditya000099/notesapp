const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

const mongoDbPath = "mongodb+srv://aditya:aditya123@cluster0.ighx3zh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoDbPath).then(function ()
 {
   
    app.get('/', function(req, res) {
    const response = { message : "API Works"};
    res.json(response);
    });
    const noteRouter = require('./routes/Note');
    app.use("/notes" , noteRouter);
    
 });

 const PORT = process.env.PORT || 5000;
app.listen(PORT , function(){
    console.log("Server listening at PORT" + PORT);
});