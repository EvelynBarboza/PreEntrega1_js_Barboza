//Bienvenidos al juego ADIVINA EL NUMERO

alert("Bienvenidos a ADIVINA EL NUMERO")


//LLAMO A LA FUNCION
//let tope = contador
//for (let contador=0; contador < ; contador +=1)
//let mostrar = miarray [contador]
//console.log ("Intentos", contador.slice (0,2))
/*let datosJugador = {
    nombre: prompt("Ingresa tu nombre"),
    apellido: prompt("Ingresa tu apellido")
}*/

//console.log (datosJugador.nombre)

//LLAMO A LA FUNCION
adivinarNumero()

//FUNCION
function adivinarNumero() {
    let datosJugador = {
        nombre: prompt("Ingresa tu nombre"),
        apellido: prompt("Ingresa tu apellido")
    } 

    let numeroX = Math.ceil(Math.random()*10);
    console.log(numeroX)
    let ganaste = 0
    for (let i=0; i < 3; i +=1) {
        let intento = prompt("Ingresa un nùmero");
        //let ok = validarNumero(numeroX)
        if (numeroX == intento) {
            alert("Felicidades, Ganaste");
            ganaste = 1
            break;
        }else{ 
            if (numeroX > intento) {
                console.log(datosJugador.nombre + " debes ingresar un nùmero mayor");
            }else{  
                console.log(datosJugador.nombre + " debes ingresar un nùmero menor");
            }    
        }
    }
    if (ganaste = 0) {
        alert("GAME OVER")
    } 
    return;
}

//FIN DEL JUEGO