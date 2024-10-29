// Ejercicio #1
let vehiculo = {
    marca: "mercedes",
    color: "rojo",
    costo: 5000000,

}

document.getElementById('ejercicioUno').innerHTML = `El vehiculo con marca ${vehiculo.marca} de color ${vehiculo.color} tiene un costo de ${vehiculo.costo}`;


//Ejercicio #2
let mostrarValoresButton = document.getElementById("mostrarValoresButton")



let guardarInfoUno = document.getElementById("guardarInfoUno")

let guardarInfoDos = document.getElementById("guardarInfoDos")

let arregloUno = []

let arregloDos = []




    guardarInfoUno.addEventListener("click", () => {
        let inputUsuarioUno = document.getElementById("inputUsuarioUno").value;

        arregloUno.push(inputUsuarioUno)
    
    })


    guardarInfoDos.addEventListener("click", () => {
        let inputUsuarioDos = document.getElementById("inputUsuarioDos").value;
        arregloDos.push(inputUsuarioDos)
    })


    
mostrarValoresButton.addEventListener("click", () => {
        console.log(arregloUno)
        console.log(arregloDos)
})


// Ejercicio #3

let alumno = {
    nombre: '',
    calificacion: []
}

let acum = 0;

let ejercicioTres = document.getElementById('ejercicioTres')

ejercicioTres.addEventListener("click", () => {
    for(let i = 0; i < 3; i++){
            alumno.calificacion[i] = Number(prompt('Ingrese la nota de la materia ' + (i+1)))
            acum += alumno.calificacion[i]
    }

    console.log(alumno.calificacion)

    document.getElementById("resultadoTres").innerText = (acum/3)
})




//Ejercicio #4

function concatenar(arrayString){
    return arrayString.join("")
    
}

let ejercicioCuatro = document.getElementById('ejercicioCuatro')

ejercicioCuatro.addEventListener("click", () => {

    
    document.getElementById("resultadoCuatro").innerHTML = concatenar(["s","a","r","a","s","a"])
})

