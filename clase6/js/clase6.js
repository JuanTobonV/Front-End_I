function calculadora(){
    //Datos de entrada

    let numero1 = Number(document.getElementById("numero1").value);

    let numero2 = Number(document.getElementById("numero2").value);

    let opcion = document.querySelector('#operacion').value;

    let resultado;

    switch(opcion){
        case "1":
            resultado = numero1 + numero2;
            break;
        case "2":
            resultado = numero1 - numero2;
            break;
        case "3":
            resultado = numero1 * numero2;
            break;
        case "4":
            resultado = numero1 / numero2;
            break;
    }

    document.getElementById("resultado").innerHTML = resultado
}