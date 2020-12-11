const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./routes/admin/admin');
const mongoose = require('mongoose');

const  MONGODB_URI =  '';  // your mongoose data base url
app.use(bodyParser.json());
app.use(cors());
app.use('/admin',adminRoutes)

app.use((req,res,next)=>{
    const err = new Error("Route not found");
    err.status = 404;
    next(err);
})
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        msg:err.message || 'Error occured'
    })
})

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to Mongo Database');
        app.listen(8080, () => {
            console.log('Server running on localhost:8080');
        });
    })
    .catch(err=>console.log(err))