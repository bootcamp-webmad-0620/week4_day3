require('./connection')

const Dog = require('./models/Dog.model')



// Retorna objeto

// Dog
//     .create({ name: 'Popino', age: 12, color: 'Plata y miel' })
//     .then(newDog => console.log('El nuevo elemento creado es:', newDog))
//     .catch(err => console.log('Hubo un error', err))




// Retorna array

Dog
    .create([
        { name: 'Pistacho', age: 8, color: 'Marroncito' },
        { name: 'Cartucho', age: 10, color: 'Gris' },
        { name: 'Popino', age: 12, color: 'Plata y miel' }
    ])
    .then(newDogs => console.log('Los nuevos elementos creados:', newDogs))
    .catch(err => console.log('Hubo un error', err))
