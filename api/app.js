const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
require('dotenv').config()
const router=require('./Router/router')
const cors=require('cors')
app.use(cors())
const {poolPromise}=require('./config/db')
const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.use(router)
app.listen(process.env.PORT,()=>{console.log(`API is running ${process.env.PORT}`)})