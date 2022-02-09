

//const base = 3;
const { crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargas')
const color = require('colors')

crearArchivo(argv.b , argv.l)
.then( nombre => console.log( nombre , 'Creado'))
.catch(err =>console.log(err))

