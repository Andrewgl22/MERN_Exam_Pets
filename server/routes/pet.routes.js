const Pet = require('../controllers/pet.controllers');

module.exports = (app) => {
    app.get('/api/pets', Pet.allPets),
    app.get('/api/pet/:id', Pet.onePet),
    app.post('/api/pet/new', Pet.addPet),
    app.put('/api/pet/edit/:id', Pet.updatePet),
    app.delete('/api/pet/delete/:id', Pet.deletePet)
}