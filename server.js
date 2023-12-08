
const express = require('express'); 
const mongoose = require('mongoose'); 
  
// Initialize App 
const app = express(); 
  
app.get('/',(req,res)=>{
  res.send("helloe",res.status)
})

app.get('/blog',(req,res)=>{
  res.send("hello Bloggig is the get api ")
})

app.listen(3001,()=>{
  console.log("Running")
})


