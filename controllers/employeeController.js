  const express=require('express')
  const router=express.Router()
  const bodyParser=require('body-parser')

  const Employee =require ('../models/employee')
const { isValidObjectId } = require('mongoose')
 
  //app.use(bodyParser.json())

  router.get ('/',async (req,res,next)=>{
    try{
        const employee = await Employee.find({})
        res.send(employee)
        res.status(200).send(ok)
    }catch(e){
        res.status(401).send(e)
    }
})


router.post('/',async(req,res)=>{
  // const  employee=new Employee(req.body);
  const employee=new Employee ({
    name:req.body.name,
    position:req.body.position,
    office:req.body.office,
    salary:req.body.salary
  })
  console.log(employee)
  try{ 
      await employee.save()
      res.send(employee)
      res.status(200).send()
  } catch (e){
      res.status(400).send(e)
  }
})

router.get('/:id',(req,res,next)=>{
  Employee.findById({_id:req.params.id}).exec()
  .then(employee=>{
      res.status(201).send(employee)
  })
  .catch(err=>{
      res.status(401).json({
          error:err
      })
  })
})

router.put('/:id',(req,res,next)=>{
 
   Employee.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Employee.findById({_id:req.params.id}).then(employee=>{
          res.status(200).send(employee)
        })
        .catch(err=>{
          res.status(401).json({
            error:err
          })
        })
   })
   .catch(err=>{
    res.status(403).json({
      error:err
    })
  })

})

router.delete('/:id',(req,res,next)=>{
  Employee.remove({_id:req.params.id})
  .exec()
  .then(result =>{
      res.status(200).json({
          message:'User deleted'
      })
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
          error:err
      });

  })  
})



module.exports=router;














// router.post('/signup',(req,res,next)=>{
//   // const  employee=new Employee(req.body);
//   Employee.find({name:req.body.name})
//   .exec()
//   .then(employee=>{
//     if(employee.length>=1){
//       return res.status(409).json({
//         error:'employee already exist'
//       })
//     }else{
//       bcrypt.hash(req.body.password,10,(err,hash)=>{
//         if(err){
//           return res.status(401).json({
//             error:err
//           })
//         }else{
//           const employee=new Employee({
//             name:req.body.name,
//             position:req.body.position,
//             office:req.body.office,
//             salary:req.body.salary,
//             password:hash

//           })
//           employee.save().then(employee=>{
//             const token=jwt.sign({_id:employee._id.toString()},'mylovelifeistrash')
//             res.status(200).send({employee,token})
//           })
//           .catch(err=>{
//             console.log(err)
//             res.status(200).json({
//                 error:err
//             })
//           })
//         }
//       })
      
//     }
//   })
//   .catch(err=>{
//     console.log(err)
//     res.status(200).json({
//         error:err
//     })
//   })
// })