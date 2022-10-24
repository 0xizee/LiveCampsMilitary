const express = require("express");
const app = express();
const data = require("./data.json");
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.send("Solidity");
}) 

app.get("/camps",(req,res) =>{
    res.send(data)
})

app.listen(PORT , ()=>{
    console.log("Its Working");
})