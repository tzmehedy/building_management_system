const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const { MongoClient, ServerApiVersion, Timestamp, ObjectId } = require("mongodb");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
    const allAgreements = client.db("BuildingManagementSystem").collection("allAgreements")
    const couponCollections = client.db("BuildingManagementSystem").collection("coupons")
    const allAnnouncements = client.db("BuildingManagementSystem").collection("allAnnouncements")

    const paymentCollections = client.db("BuildingManagementSystem").collection("payments")

    app.post("/create-stripe-intent", async(req,res)=>{
      const {price} = req.body 
      const priceInCent = parseFloat(price * 100)
      const { client_secret } = await stripe.paymentIntents.create({
        amount: priceInCent,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.send({ clientSecret: client_secret })
    })

    app.get("/users", async(req,res)=>{
      const result = await usersCollection.find().toArray()
      res.send(result)
    })

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

    app.patch("/users/:email", async(req,res)=>{
      const email = req.params.email 
      const {role} = req.body
      const query = {email:email}
      const updatedDoc = {
        $set: {
          role: role
        },
      };
      const result = await usersCollection.updateOne(query, updatedDoc)
      res.send(result)
    })



    app.get("/allApartments", async(req,res)=>{
      const page= parseInt(req.query.page) - 1
      const size= parseInt(req.query.size)
      const result = await allApartments.find().skip(page*size).limit(size).toArray()
      res.send(result)
    })

    app.get("/user-role/:email",async(req,res)=>{
      const email = req.params.email 
      const query = {email:email}
      const result = await usersCollection.findOne(query)
      const role = result?.role
      res.send({role})
    })

    app.get("/allApartment-count", async(req,res)=>{
      const count = await allApartments.countDocuments()
      res.send({count})
    })

    app.patch("/change-status/:apartment_no", async (req, res) => {
      const apartmentNo = req.params.apartment_no;
      const query = { apartment_no: apartmentNo };
      const updateDoc = {
        $set: {
          status: "booked",
        },
      };
      const result = await allApartments.updateOne(query, updateDoc);
      res.send(result);
    });

    app.post("/allAgreements", async(req,res)=>{
      const agreementInfo = req.body
      const result = await allAgreements.insertOne(agreementInfo);
      res.send(result) 
    })
    app.get("/allAgreements", async(req,res)=>{
      const result = await allAgreements.find().toArray()
      res.send(result)
    })
    app.patch("/allAgreements/:id", async(req,res)=>{
      const id = req.params.id 
    const {status} = req.body
      const query = {_id: new ObjectId(id)}
      const updatedDoc = {
        $set:{
          status: status,
          accepted_date: new Date()
        }
      }
      const result = await allAgreements.updateOne(query, updatedDoc)
      res.send(result)
    })

    app.get("/agreement/:email",async(req,res)=>{
      const email = req.params.email
      const query = {a_email: email}
      const result = await allAgreements.findOne(query)
      res.send(result)
    })

    app.post("/isExist", async(req,res)=>{
      const user = req.body
      const query={a_email: user?.email}
      const isExist = await allAgreements.findOne(query)
      res.send({isExist})
    })

    app.post("/couponIsExist", async(req,res)=>{
      const {coupon} = req.body 
      const query = {code: coupon}
      const isExist = await couponCollections.findOne(query)
      if(!isExist) return res.status(404).send({message: "The code is not valid"})  
      res.send({isExist})
    })

    app.get("/allCoupons", async(req,res)=>{
      const result = await couponCollections.find().toArray()
      res.send(result)
    })

    app.post("/addAllCoupons", async( req,res)=>{
      const couponInfo = req.body 
      const result = await couponCollections.insertOne(couponInfo)
      res.send(result)
    })

    app.post("/payment-info", async(req,res)=>{
      const paymentInfo = req.body 
      const result = await paymentCollections.insertOne(paymentInfo)
      res.send(result)    
    })

    app.get("/paymentInfoByEmail/:email", async(req,res)=>{
      const email = req.params.email
      const month = req.query.searchText
      let query = { a_email: email }
      if(month !== "null" && month !=="all"){
        query = {...query, month:month}
      }
      const result = await paymentCollections.find(query).toArray()
      res.send(result)
    })

    app.post("/announcement", async(req,res)=>{
      const announcementDetails = req.body 
      const result = await allAnnouncements.insertOne(announcementDetails)
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