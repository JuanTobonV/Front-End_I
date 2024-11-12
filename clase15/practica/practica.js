let nombreUsuario = document.getElementById('nombreUsuario');
let contraseñaUsuario = document.getElementById('contraseñaUsuario');
let confirmarContraseña = document.getElementById('confirmarContraseñaUsuario');
let botonGuardar = document.getElementById('buttonGuardar');
let botonMostrar = document.getElementById('buttonRecuperar');

botonGuardar.addEventListener('click', () => {
    if(contraseñaUsuario.value === confirmarContraseña.value){
        let usuario = {
            nombre: nombreUsuario.value,
            contraseña: contraseñaUsuario.value,
        }

        localStorage.setItem('usuarioGuardado', JSON.stringify(usuario));
    }
    else{
        alert('Las contraseñas no coinciden')
    }

    nombreUsuario.value = '';
    contraseñaUsuario.value = '';
    confirmarContraseña.value = '';
})


botonMostrar.addEventListener('click', () => {
    let usuarioGuardado = JSON.parse(localStorage.getItem('usuarioGuardado'));

    nombreUsuario.value = usuarioGuardado.nombre;
    contraseñaUsuario.value = usuarioGuardado.contraseña;
})


/////////////////////////////////////////////////////////////////////////////////////

//Ejercicio #2

let nombreMascota = document.getElementById('nombreMascota');
let razaMascota = document.getElementById('razaMascota');
let colorMascota = document.getElementById('colorMascota');
let pesoMascota = document.getElementById('pesoMascota');
let guardarMascota = document.getElementById('guardarMascota');

let mostrarBusqueda = document.getElementById('mostrarBusqueda')
let opcionMascota = document.getElementById('busquedaInfoMascota').value;
let campoMostrar = document.getElementById('campoMostrar')

guardarMascota.addEventListener('click', () => {
    let mascota = {
        nombre: nombreMascota.value,
        raza:razaMascota.value,
        color:colorMascota.value,
        peso:pesoMascota.value,

    }

    localStorage.setItem('mascotaGuardada', JSON.stringify(mascota));


})



    let mascotaGuardada = JSON.parse(localStorage.getItem('mascotaGuardada')) 

switch(opcionMascota){
        case "1":
            mostrarBusqueda.addEventListener('click', () =>{
                campoMostrar.innerHTML= `
                <strong>
                    <p>El nombre de tu mascota es: ${mascotaGuardada.nombre}</p>
                </strong>
            `;
            })
            
            break;

        case "2":
            mostrarBusqueda.addEventListener('click', () =>{
            campoMostrar.innerHTML= `
                <strong>
                    <p>El raza de tu mascota es: ${mascotaGuardada.raza}</p>
                </strong>
            `;
            })
            break;

        case "3":
            mostrarBusqueda.addEventListener('click', () =>{
            campoMostrar.innerHTML= `
                <strong>
                    <p>El color de tu mascota es: ${mascotaGuardada.color}</p>
                </strong>
            `;
            })
            break;
        case "4":
            mostrarBusqueda.addEventListener('click', () =>{
            campoMostrar.innerHTML= `
                <strong>
                    <p>El peso de tu mascota es: ${mascotaGuardada.peso}</p>
                </strong>
            `;
            });
        break;
    }
