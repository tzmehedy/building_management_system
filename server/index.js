const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const { MongoClient, ServerApiVersion, Timestamp } = require("mongodb");

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get("/", async(req,res)=>{
    res.send("The building management data will come soon")
})
const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k8aq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const usersCollection = client.db("BuildingManagementSystem").collection("allUsers")
    const allApartments = client.db("BuildingManagementSystem").collection("allApartments")

    app.put("/users", async(req,res)=>{
        const userInfo = req.body
        const query = {email: userInfo?.email}
        const isExist = await usersCollection.findOne(query)
        if(isExist){
          return res.send(isExist)
        }
        const option = {upsert:true}

        const updateUser = {
          $set: {
            ...userInfo,
            Timestamp: new Date()
          },
        };
        const result = await usersCollection.updateOne(query, updateUser, option)
        res.send(result)
    })

    app.get("/allApartments", async(req,res)=>{
      const result = await allApartments.find().toArray()
      res.send(result)
    })
    
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`The server will run on the port of ${port}`)
})