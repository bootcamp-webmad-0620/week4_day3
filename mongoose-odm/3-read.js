require('./connection')

const Dog = require('./models/Dog.model')

// .find()
// 1st argument: The query represented by an object. 
// 2nd argument (optional): The projection represented by an object.
// Dog
//     .find({ age: { $gte: 10 } }, { name: 1 })
//     //.sort({ name: -1 })
//     //.limit(3)
//     .then(dogs => console.log('Los perros encontados son:', dogs))
//     .catch(err => console.log('Hubo un error', err))




// // recibe string con ID, retorna objeto match
// Dog
//     .findById('5ef328fc2ff03c08d2b516e3')
//     .then(dog => console.log('El perro encontados es:', dog))
//     .catch(err => console.log('Hubo un error', err))





// // Recibe query, retorna el primer match
// Dog
//     .findOne({ age: { $gte: 10 } })
//     .then(dog => console.log('El perro encontados es:', dog))
//     .catch(err => console.log('Hubo un error', err))