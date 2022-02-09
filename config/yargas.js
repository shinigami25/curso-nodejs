const argv = require('yargs')
.option(
    'b', {
        alias : 'base',
        type : 'number',
        demandOption : true,
        describe : "La base de la tabla de multiplicar"
    } ,
  
)
.option(
    'l', {
        alias : 'listar',
        type : 'boolean',
        default : false
    } ,
  
)

.check( ( argv , options ) =>{
   if(isNaN(argv.b)){
       throw ('La base tiene que ser un numero')
   }
   return true
} )
.argv


module.exports = argv