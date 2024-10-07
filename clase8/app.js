
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

function conversorTemperaturaCelsiusToFarenheit(){

    const temperaturaCelcius = Number(document.getElementById('temperaturaCelcius').value);

    let celciusToFarenheit = (temperaturaCelcius * 1.8) + 32;

    console.log(celciusToFarenheit)


    if ( (celciusToFarenheit < 32) ){
        document.querySelector('#mensajeTemperatura').innerText = 'Nos congelamos'
    }
    else if( 33 <= celciusToFarenheit <= 50 ){
    
        document.querySelector('#mensajeTemperatura').innerText = 'Está haciendo frio'

    }
    else if( 51 <= celciusToFarenheit <= 77){
        

        document.querySelector('#mensajeTemperatura').innerText = 'Está templado el día'

    }
    else if(celciusToFarenheit > 77){
        document.querySelector('#mensajeTemperatura').innerText = 'Tiene fiebre o es el apocalipsis';

    }



}

function conversorTemperaturaFarenheitToCelsius(){

    const temperaturaFarenheit = Number(document.getElementById('temperaturaFarenheit').value);

    let farenheitToCelcius = (temperaturaFarenheit * 1.8) + 32;

    console.log(farenheitToCelcius)



    if ( (farenheitToCelcius < 0) ){
        document.querySelector('#mensajeTemperatura').innerText = 'Nos congelamos'
    }
    else if( 0 <= farenheitToCelcius <= 15 ){
    
        document.querySelector('#mensajeTemperatura').innerText = 'Está haciendo frio'

    }
    else if( 16 <= farenheitToCelcius <= 25){
        

        document.querySelector('#mensajeTemperatura').innerText = 'Está templado el día'

    }
    else{
        document.querySelector('#mensajeTemperatura').innerText = 'Tiene fiebre o es el apocalipsis';

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

