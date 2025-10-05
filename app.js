const express = require ('express');
const Router = require ('./src/routes/StudentData');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

//express app setup
const app = express();
const PORT = process.env.PORT || 3030;

//Middleware
app.use(express.json());
app.use(morgan(':method :url'));


mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log('MongoDB Connected success'))
.catch(error => console.error( ' MongoDB is not connect : ', error ));

//Router
app.use("/", require('./src/routes/Home'));
app.use("/items", require('./src/routes/item'));
app.use("/health", require('./src/routes/health'));
app.use("/all", require('./src/routes/item'));


//404 error handler message
app.use((req, res) => {
     res.status(404).json({message: "Enpoint router not found"});
});

//Server listening on the PORT
app.listen(PORT, ( ) => {
    console.log(`server listening on the PORT NO : ${PORT}`);
});