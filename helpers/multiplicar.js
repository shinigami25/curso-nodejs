
const fs = require('fs');
const color = require('colors')

const crearArchivo = async( base = 5 , listar= false)=>{

   
        try{
            let salida = "";
            console.clear();
            console.log(` TABLA ${base}  `) 
            for( let i = 1; i<10 ; i ++){
                  salida+= ` ${ base} x $ ${ i}  \n`; 
            }

            if(listar){
                console.log( color.blue(salida))    
            }

         
            fs.writeFileSync(`tabla-${base}.txt` , salida  )
            return `tabla-${base}.txt creado`;
            
        }catch(error){
            throw error

        }
    
}


module.exports  = {
    crearArchivo 
}