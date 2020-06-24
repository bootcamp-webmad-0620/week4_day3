require('./connection')

const DogAdvanced = require('./models/Dog-advanced.model')

const dog = {
    age: 2,
    color: 'Black',
    name: 'chulapo',
    chip: 'AB0000',
    email: 'chuchi@losperrinos.com'
}

DogAdvanced
    .create(dog)
    .then(newDogs => console.log('Los nuevos elementos creados:', newDogs))
    .catch(err => console.log('Hubo un error', err))
