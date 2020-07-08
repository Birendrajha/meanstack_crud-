const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose');
const employeeController=require ('./controllers/employeeController')
const router=express.Router()
const cors=require ('cors')
 require ('./db.js');

 const app=express();
 app.use(bodyParser.json())
 app.use(cors())

app.use('/employee',employeeController)


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})