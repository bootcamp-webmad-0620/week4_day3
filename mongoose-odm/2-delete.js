require('./connection')

const Dog = require('./models/Dog.model')



// // Recibe string con ID
// Dog
//     .findByIdAndRemove('5ef3262fe020610885baee3f')
//     .then(deletedItem => console.log('El elimimento eliminado era:', deletedItem))
//     .catch(err => console.log('Hubo un error', err))


// // Recibe query
// Dog
//     .deleteMany({ name: 'Popino' })
//     .then(details => console.log('Los detalles de la eliminación son:', details))
//     .catch(err => console.log('Hubo un error', err))


// // Recibe query
// Dog
//     .deleteOne({ name: 'Pistacho' })
//     .then(details => console.log('Los detalles de la eliminación son:', details))
//     .catch(err => console.log('Hubo un error', err))