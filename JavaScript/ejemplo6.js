var Pelicula = {
    titulo : "Tarzan",
    año : 1998,
    
    Reproducir(){
        return "Estor reproduciendo la pelicula : "+ this.titulo;
    }
    }

    //******************************************** */

    class Vehiculo {
        constructor(peso, color){
            this.peso = peso,
            this.color = color

        }
        arrancar(){
            return "Estor Arrancando el carro de color : " + this.color
        }
    }

var miCarro1 = new Vehiculo(78,"Negro");
var miCarro2 = new Vehiculo(58,"Blanco");
console.log(miCarro2.arrancar())
   // console.log (Pelicula.Reproducir());