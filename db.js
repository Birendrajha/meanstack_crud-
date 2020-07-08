const mongoose=require ('mongoose')

mongoose.connect('mongodb://localhost:27017/NG_CRUD', (err)=>{
if(!err){
    console.log('connected to mongoDb')
}else{
    console.log('error in connecting to DB')
}
})

module.exports= mongoose;