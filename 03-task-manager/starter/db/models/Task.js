const {model,Schema, Model} = require('mongoose');


const taskSchema = new Schema({
    name:{
        type:String,
        required: [true,"sorry name is required"],
        trim: true,
        maxlength:[20,'name can not be more than 20 characters']
   },
   completed:{
        type: Boolean,
        default: false
   },
})


module.exports = model('Task',taskSchema);
