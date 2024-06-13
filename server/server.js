const express = require("express")
const app = express()
const issueRoute = require("./routes/issueRoutes")


app.use(express.json())

app.use("api/issue", issueRoute)

app.get('/api', (req,res) => {
    res.status(200).json({message: "hello"})
})



app.listen(5000, () => {
    console.log("Server running on port 5000...")
})