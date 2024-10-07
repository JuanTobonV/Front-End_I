
function calcularVelocidad(){


    const velocidad = Number(document.getElementById('valorVelocidad').value);

    const velocidadMetrosHora = (velocidad * 1000);

    const velocidadMillasHora = velocidad/ 1.609;

    console.log(velocidadMetrosHora, velocidadMillasHora)

    document.getElementById('respuestaMetrosHora').innerText = `La velocidad ingresada en m/h es: ${velocidadMetrosHora}`;
    document.getElementById('respuestaMillasHora').innerText = `La velocidad ingresada en mi/h es: ${velocidadMillasHora.toFixed(4)}`


}

function calcularCosteLlamada(){

    let cantidadMinutosLlamada = Number(document.getElementById('duracionLlamada').value)

    let costeLlamada = 0;

    if(cantidadMinutosLlamada > 5){

        cantidadMinutosLlamada -= 5
        costeLlamada = 200;

        for(let i = 0; i < cantidadMinutosLlamada; i++){

            costeLlamada += 150;

        }
    }

    else if(0 < cantidadMinutosLlamada <= 5){

        costeLlamada = 200;

    }   

    document.getElementById('respuestaCosteLlamada').innerText = `El valor de la llamada es de: ${costeLlamada}`

}

function conversorTemperaturaCelsiusToFarenheit() {
    const temperaturaCelcius = Number(document.getElementById('temperaturaCelcius').value);
    let celciusToFarenheit = (temperaturaCelcius * 1.8) + 32;

    console.log(celciusToFarenheit);

    if (celciusToFarenheit < 32) {
        document.querySelector('#mensajeTemperatura').innerText = 'Nos congelamos';
    } 
    else if (celciusToFarenheit >= 32 && celciusToFarenheit <= 50) {
        document.querySelector('#mensajeTemperatura').innerText = 'Está haciendo frio';
    } 
    else if (celciusToFarenheit >= 51 && celciusToFarenheit <= 77) {
        document.querySelector('#mensajeTemperatura').innerText = 'Está templado el día';
    } 
    else {
        document.querySelector('#mensajeTemperatura').innerText = 'Hace calor';
    }
}

function conversorTemperaturaFarenheitToCelsius() {
    const temperaturaFarenheit = Number(document.getElementById('temperaturaFarenheit').value);
    let farenheitToCelsius = (temperaturaFarenheit - 32) / 1.8;

    console.log(farenheitToCelsius);

    if (farenheitToCelsius < 0) {
        document.querySelector('#mensajeTemperatura').innerText = 'Nos congelamos';
    } 
    else if (farenheitToCelsius >= 0 && farenheitToCelsius <= 10) {
        document.querySelector('#mensajeTemperatura').innerText = 'Está haciendo frio';
    } 
    else if (farenheitToCelsius >= 11 && farenheitToCelsius <= 25) {
        document.querySelector('#mensajeTemperatura').innerText = 'Está templado el día';
    } 
    else {
        document.querySelector('#mensajeTemperatura').innerText = 'Hace calor';
    }
}


function calcularIMC(){
    const altura = Number(document.getElementById('estaturaUsuario').value);

    const peso = Number(document.getElementById('pesoUsuario').value);

    let IMC = peso / (altura)**2;

    if (IMC < 18.5){
        document.getElementById('respuestaIMC').innerText = 'Debe ir al nutricionista';
    }
    else if( 18.5 <= IMC <= 24.9){
        document.getElementById('respuestaIMC').innerText = 'Normal';

    }
    else if (25.9 <= IMC <=29.9){
        document.getElementById('respuestaIMC').innerText = 'Sobrepeso';

    }

    else{
        document.getElementById('respuestaIMC').innerText = 'Obeso, debe ir al nutricionista';

    }
}

