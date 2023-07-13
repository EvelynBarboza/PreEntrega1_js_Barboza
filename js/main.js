//Bienvenidos al juego ADIVINA EL NUMERO

alert("Bienvenidos a ADIVINA EL NUMERO")


//LLAMO A LA FUNCION
adivinarNumero()

//FUNCION
function adivinarNumero() {

    let numeroX = Math.ceil(Math.random()*10);
    console.log(numeroX)
    let ganaste = 0
    for (let contador=0; contador < 3; contador +=1) {
        let intento = prompt("Ingresa un nùmero");
        //let ok = validarNumero(numeroX)
        if (numeroX == intento) {
            alert("Felicidades, Ganaste Rey");
            ganaste = 1
            break;
        }else{ 
            if (numeroX > intento) {
                console.log("Debes ingresar un nùmero mayor");
            }else{  
                console.log("Debes ingresar un nùmero menor")
            }    
        }
    } 
    if (ganaste=0) {
        alert("GAME OVER")
    }
    return;
}

//FIN DEL JUEGO