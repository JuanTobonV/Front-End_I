function viewCurrency(){

    let valor1 = Number(document.getElementById("valor1").value)

    let currency = document.querySelector("#currency").value

    let resultado;

    switch(currency){
        case "1":
            resultado = valor1 * Number(4657.08);
            document.getElementById("resultado").innerHTML = (valor1 + " euros son " + resultado + " pesos colombianos")
            break;
        case "2":
            resultado = valor1 * Number(0.00021);
            document.getElementById("resultado").innerHTML = (valor1 + " cop son " + resultado + " euros")

            break;

    }

    //.toFixed(numero) para redondear numeros
    






}