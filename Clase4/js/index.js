var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  document.write("numero1 no es mayor que numero2");
}else if(numero2 > 0) {
  document.write ("numero2 es positivo");
}
else if(numero1 != 0) {
  document.write ("numero1 es distinto de cero");}


function factorial(){
    let numero = Number(prompt("Escribe el número al que le quieres sacar el factorial"));

    let factorial = 1;

    for (let i = 1; i <= numero; i++){
        factorial = factorial * i
    }

    document.getElementById('resultadoFactorial').innerText = ("El factorial del numero escogido es: " + factorial)
}