const Pet = require("../model/pet.model");

module.exports.allPets = (req,res) => {
    Pet.find().sort({type:1})
    .then((req)=> res.json(req))
    .catch((err)=>res.json(err))
}

module.exports.onePet = (req,res) => {
    Pet.findById({_id:req.params.id})
    .then((req)=> res.json(req))
    .catch((err)=>res.json(err))
}

module.exports.addPet = (req,res) => {
    Pet.create(req.body)
    .then((req)=> res.json(req))
    .catch((err)=>res.json(err))
}

module.exports.updatePet = (req,res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((req)=> res.json(req))
    .catch((err)=>res.json(err))
}

module.exports.deletePet = (req,res) => {
    Pet.deleteOne({_id:req.params.id})
    .then((req)=> res.json(req))
    .catch((err)=>res.json(err))
}