const express = require("express")
const mongoose = require("mongoose")
const issueRoute = require("./routes/issueRoutes")
const dotenv = require('dotenv').config()

const DB_URL = process.env.DB_URL

const app = express()
app.use(express.json())
app.use("/api/issue", issueRoute)


app.listen(5000, () => {
    mongoose.connect(DB_URL)
    .then(() => {
        console.log('connected to mongodb');
    }).catch((error) => {
        console.log(error);
    })

    console.log("Server running on port 5000...")
})