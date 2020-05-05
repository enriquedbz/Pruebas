var sabor;
var color;
var azucar;

sabor=prompt('Ingrese su sabor :','');
color=prompt('Ingrese su color :','');
azucar=prompt('Ingrese su % de azucar :','');

var respuesta;
var r = confirm("Presione el boton si desea combinar!");
if (r == true) {
  respuesta = "combinar";
} else {
  respuesta = "no_combinar";
}

if (respuesta == "combinar") {
    class Gelatina {
        constructor(sabor, color, azucar){
            this.sabor = sabor,
            this.color = color,
            this.azucar = azucar

        }
        combinar(){
            return "Mi gelatina de sabor : " + this.sabor + " Es de color : " + this.color + " Con el porcentaje de azucar de " + this.azucar
            
        }
    }
    var miGelatina = new Gelatina(sabor,color, azucar);
    console.log(miGelatina.combinar())

    } else{ 
        console.log("No combinar")   
    }

   // console.log (Pelicula.Reproducir());
