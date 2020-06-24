const express = require('express')
const app = express()
require('./configs/connection')

app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

const Dog = require('./models/Dog.model')

app.get('/', (req, res) => res.render('index'))
app.get('/perrinos', (req, res) => {
    Dog.find({ name: 'Popino' })
        .then(dogs => res.render('dogs-list', { dogs }))
        .catch(err => console.log(err))
})

app.listen(3000, () => console.log(`Servidor levantado en el puerto 3000`))