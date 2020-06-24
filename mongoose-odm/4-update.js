require('./connection')

const Dog = require('./models/Dog.model')


// Recibe string con id, y manipulación
// Por defecto, retorna el elemento anterior al update
// El argumento final (opcional) oblliga a retornar el nuevo
// Dog
//     .findByIdAndUpdate('5ef328fa5d4dda08cdac59f6', { $inc: { age: 1 } }, { new: true })
//     //.findByIdAndUpdate('5ef328fa5d4dda08cdac59f6', { name: 'Yay!', color: 'red' })
//     .then(dog => console.log("El perro modificado es:", dog))
//     .catch(err => console.log('Hubo un error', err))


// // Recibe query, actualiza el primer match
// Dog
//     .updateOne({ name: 'Popino' }, { name: 'Primer Popino' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))


// // Recibe query, actualiza todos los match
// Dog
//     .updateMany({ name: 'Pistacho' }, { name: 'Pistacho Reloaded' })
//     .then(details => console.log("Los detalles de la modificación son:", details))
//     .catch(err => console.log('Hubo un error', err))
