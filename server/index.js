const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", async(req,res)=>{
    res.send("The building management data will come soon")
})

app.listen(port, ()=>{
    console.log(`The server will run on the port of ${port}`)
})