const mongoose = require ("mongoose");
const validator = require ("validator");


const pantrySchema = new mongoose.Schema({
    basket_name :{
        type: String,
        required :true,
        minlength:15
    },
    items :{
        type:Object,
        required:true,
    },
    item_name:{
        type: String,
        min:15,
        required:true
    },
    quantity :{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})


// we will create a new model
 const Pantry = new mongoose.model('Pantry',pantrySchema);

 module.exports = Pantry;