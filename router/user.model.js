import mongoose from "mongoose";
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    empId:{type:String},
    phone:{type:Number},
    designation:{type:String},
    experience:{type:Number},
    salary:{type:Number},
    address:{type:String},
    Photo:{type:String}

})

export default mongoose.model.Tasks||mongoose.model("task",schema)