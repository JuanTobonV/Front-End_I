let nombreUsuario = document.getElementById('nombre');

let apellidoUsuario = document.getElementById('apellido');

let botonGuardar = document.getElementById('buttonGuardarDatos');

let botonMostrar = document.getElementById('buttonMostrarDatos');

let mostrarDatos = document.getElementById('imprimirUsuario');



botonGuardar.addEventListener('click', () => {
    let usuario = {
        nombreUsuario: nombreUsuario.value,
        apellidoUsuario: apellidoUsuario.value
    }

    localStorage.setItem("usuario", JSON.stringify(usuario))

    nombreUsuario.value= ''
    apellidoUsuario.value= ''

})

botonMostrar.addEventListener('click', () => {

    let parsedData = JSON.parse(localStorage.getItem('usuario'))

    mostrarDatos.innerHTML = `
        Tu nombre es: ${parsedData.nombreUsuario} <br>
        Tu apellido es: ${parsedData.apellidoUsuario}
        
    `;
})