const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require("./employee")

const Employee = mongoose.model("employee")

app.use(bodyParser.json())
//Entre la diagonal y el signo de interrogacion /? irá el nombre de la base de datos
const mongURI = "mongodb+srv://Italy:HgRa11QuOjXn6Kav@atlascluster.dkvj4np.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",error)
})

app.post('/delete',(req,res) =>{
    Employee.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log("error",err)
    })
})

app.post('/update',(req,res) =>{
    Employee.findByIdAndUpdate(req.body.id ,{
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position
    }).then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log("error",err)
    })
})

app.post('/send-data',(req,res) =>{
    const employee = new Employee({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone, 
        picture : req.body.picture,
        salary : req.body.salary,
        position : req.body.position
    })
    employee.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})

app.get('/',(req,res) =>{
  Employee.find({})
  .then(data =>{
      console.log(data)
      res.send(data)
  }).catch(err => {
    console.log(err)
})
})

app.listen(3000,() =>{
    console.log("Listening on 3000")
})  
