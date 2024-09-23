
function sumar(){

    // Datos de entrada

    let numero1 = Number(prompt("Ingrese el primer número"));
    let numero2 = Number(prompt('Ingrese el segundo número'));

    let suma = numero1 + numero2

    // Dato de salida
    document.getElementById('resultado').innerText='El resultado de la suma entre los numeros ingresados es de ' + suma

    // innerText o innerHTML es un método de salida que nos permite
    // mostrar un mensaje dentro de una etiqueta

}


//Ejercicio #2

function verPlaca(){

    let placanum1 = prompt('Ingrese la placa del primer bus');

    let numPasajeros1 = Number(prompt('Ingrese la cantidad de pasajeros'))

    let valorPasaje1 = Number(prompt('Ingrese el valor del pasaje'))

    let placanum2 = prompt('Ingrese la placa del segundo bus');

    let numPasajeros2 = Number(prompt('Ingrese la cantidad de pasajeros'))

    let valorPasaje2 = Number(prompt('Ingrese el valor del pasaje'))
    

    if((valorPasaje1 * numPasajeros1) < (valorPasaje2*numPasajeros2)){
        document.getElementById('mostrarBuses').innerText ='El bus con mayor dinero es: ' + placanum2;

    }
    else if((valorPasaje1 * numPasajeros1) > (valorPasaje2*numPasajeros2)){
        document.getElementById('mostrarBuses').innerText = 'El bus con mayor dinero es: ' + placanum1;

    }
    else{
        document.getElementById('mostrarBuses').innerText = 'ambos ganan lo mismo';

    }
   

    
}

