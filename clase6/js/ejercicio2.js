function mostrarPresupuesto(){

    let totalPresupuesto = 0;

    let procesador = document.getElementById("procesador").value;

    let monitor = document.getElementById("monitor").value;

    let discoDuro = document.getElementById("discoDuro").value;

    
    switch(procesador){
        case "1":

            totalPresupuesto += Number( 400000);
            break;

        case "2":
            totalPresupuesto +=  Number(600000);
            break;

        case "3":
            totalPresupuesto += 800000;
            break;
    

    }

    switch(monitor){
        case "4":
            totalPresupuesto += Number(250000)
            break;

        case "5":
            totalPresupuesto += 350000
            break;

        case "6":
            totalPresupuesto += 550000
            break;

    }

    switch(discoDuro){
        case "7":
            totalPresupuesto += Number(300000)
            break;

        case "8":
            totalPresupuesto += 440000
            break;

        case "9":
            totalPresupuesto += 500000
            break;

    }

    document.getElementById("totalPresupuesto").innerHTML = "Total: " + totalPresupuesto;
}