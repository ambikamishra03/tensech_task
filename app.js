const express = require('express');
const mongoose = require('mongoose');
require('./src/connection/db');

const Pantry = require("./src/model/pantryy");
const pantryRouter =require("./src/routes/pantry_route");

const app =express();
const port =process.env.PORT || 9443

app.use(express.json());
app.use(pantryRouter);


app.listen(port ,()=>{
    console.log(`server is running on port ${port}`);
})
