// connect mongodb
const mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LoginSignUpForm")

.then(()=>{
   console.log('connected');
})
.catch(()=>{
    console.log('not connected');
})
//  create a schema
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    password:{
        type: String,
        required: true

    }
});

// create a collection

const collection = new mongoose.model("Logincollection",LoginSchema)
// this line mandatory to connect the mongodb with index.js
module.exports =collection

