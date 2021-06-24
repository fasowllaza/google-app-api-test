require('dotenv').config()
const express = require("express")
const app = express()
const port = 3000
const axios = require("axios")
const latitude = "-6.4286981999999995"
const longitude = "106.8265268"
const radius = "1500"
const keyword = "pemakaman"
let api_key = process.env.API_KEY


app.get("/", async (req, res) =>{
    let data = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&keyword=${keyword}&key=${api_key}`)
    res.send(data.data.results)
})

app.listen(port, ()=>{
    console.log("http://localhost:3000");
})