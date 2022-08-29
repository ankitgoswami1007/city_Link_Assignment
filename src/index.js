const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/route')

const app = express()

app.use(express.json())

app.use("/",router)

mongoose.connect("mongodb+srv://DbProject:UXvJ3hrjdhmVjFq1@cluster0.jcr2s.mongodb.net/TruckingBooking?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDb is connected"))
.catch((error)=> console.log(error))


app.listen(process.env.port || 3000 , ()=> console.log(`server is runing on port ${process.env.port || 3000}`))

