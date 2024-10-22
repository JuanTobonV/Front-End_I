function ejercicioCompraEntradas(){

    let compraEntradas = {
        evento: [],
        cantidad: [],
        precio: [],
        tiempo: [],
    }

    let cantidadEventosUsuario = prompt("Ingrese la cantidad de eventos a los que quiere ingresar")

    let totalCompra = 0;
    let totalTiempo = 0;
    let descuento = 0;
    
    for(let i = 0; i < cantidadEventosUsuario; i++){
        for(let key in compraEntradas){

            compraEntradas[key][i] = prompt(`Ingrese ${key} del evento ${i+1}`);

        }
    }

    for(let j = 0; j < cantidadEventosUsuario; j++){

        let totalEvento = 0;
        
        
        for(let key in compraEntradas){
            document.write(key + ": " + compraEntradas[key][j] + "<br>")
            totalEvento = Number(compraEntradas.cantidad[j]) * Number(compraEntradas.precio[j])

            
        }
        totalTiempo += Number(compraEntradas.tiempo[j]);
        
        totalCompra+=totalEvento;

        document.write("------------------------------------<br>")  

        
    }

    if(totalTiempo > 10){
        document.write('Cuidado! Has reservado más de 10 horas en eventos: '+ totalTiempo + '<br>');

    } 
    else{
        document.write('Has reservado '+ totalTiempo + ' horas.' + "<br>")
    }

    if(totalCompra > 500000){
        document.write("Por tener una compra mayora a 500.000 pesos, te has ganado un descuento del 10%: " + ((totalCompra*10)/100) + "<br>");
        descuento = ((totalCompra*10)/100);
    }
    else{
        document.write('No se aplica descuento (No se supera 500.000 en compra)' + "<br>")
        descuento = 0;
    }

    document.write("total: " + (totalCompra-descuento)   + "<br>");

    
}