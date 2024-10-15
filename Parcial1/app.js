function calcularValorPizza(){
    const nombrePizza = document.getElementById("opcionesPizza").value;

    const ingredientesAdicionales = document.getElementById("ingExtra").value;
    
    const cantidad = document.getElementById("idCantidad").value;
    
    let totalPizza = 0;

    switch(nombrePizza){
        case "1":
            document.getElementById("nombreProducto").innerText = "Pizza de queso"
            document.getElementById("precioProducto").innerText = `$ ${14000*cantidad}`
            document.getElementById("cantidadProducto").innerText = cantidad
            totalPizza += (14000*cantidad)
            break;

        case "2":
            document.getElementById("nombreProducto").innerText = "Pizza de jamón y queso"
            document.getElementById("precioProducto").innerText = `$ ${16000*cantidad}`
            document.getElementById("cantidadProducto").innerText = cantidad
            totalPizza += (16000*cantidad)
            break;

        case "3":
            document.getElementById("nombreProducto").innerText = "Pizza de queso y peperoni"
            document.getElementById("precioProducto").innerText = `$ ${18000*cantidad}`
            document.getElementById("cantidadProducto").innerText = cantidad
            totalPizza += (18000*cantidad)
            break;   


    }

    switch(ingredientesAdicionales){
        case "4":
            document.getElementById("nombreAdicion").innerText = "Maiz"
            document.getElementById("precioAdicion").innerText = "$ 2000"
            totalPizza += (2000)
            break;

        case "5":
            document.getElementById("nombreAdicion").innerText = "Queso"
            document.getElementById("precioAdicion").innerText = "$ 10000"
            totalPizza += (10000)
            break;

        case "6":
            document.getElementById("nombreAdicion").innerText = "Peperoni"
            document.getElementById("precioAdicion").innerText = "$ 5.000"
            totalPizza += (5000)
            break;   


    }

    document.getElementById("total").innerText = `Total: ${totalPizza}`



}