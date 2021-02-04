const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters long"]

    },

    type : {
        type:String,
        required: [true, "Pet must have a type"],
        minLength: [3, "Type must be at least 3 characters long"]
    },

    description : {
        type:String,
        required: [true, "Pet must have a description"],
        minLength: [3, "Description must be at least 3 characters long"]
    },

    skill1 : {
        type: String,
    }, 
    
    skill2 : {
        type: String,
    },
    
    skill3 : {
        type: String,
    }  

})

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;