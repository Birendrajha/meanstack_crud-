const mongoose=require('mongoose')

const employee_schema=mongoose.Schema({
name:{type:String},
password:{type:String},
position:{type:String},
office:{type:String},
salary:{type:String},
tokens: [{
    token: {
        type: String,
        required: true
    }
}],
});

//var Employee=mongoose.model('Employee',{

    const employee=mongoose.model('employee',employee_schema)
    module.exports=employee;
