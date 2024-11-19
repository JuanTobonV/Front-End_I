// Crear una función que valide que todos los campos estén digitados

function validarDatos(){
    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('email').value;
    let ciudad = document.getElementById('Ciudad').value;

    if(cedula === "" || nombre === "" || apellido === "" || edad === "" || correo === "" || ciudad === ""){
        alert('Todos los datos son requeridos');
        return false
    }
    return true
    
}

//2. Crear una función que guarde los datos del formulario

document.getElementById('guardar').addEventListener('click', () => {
    let cedula = document.getElementById('cedula').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('email').value;
    let ciudad = document.getElementById('Ciudad').value;

    if(validarDatos()){
        let listaDatos;

        if(localStorage.getItem('UsuariosRegistrados') == null){
            listaDatos = []
        }
        else{
            listaDatos = JSON.parse(localStorage.getItem('UsuariosRegistrados'))
        }

        listaDatos.push({
            "Cedula":cedula,
            "Nombre":nombre,
            "Apellido":apellido,
            "Edad":edad,
            "Correo":correo,
            "Ciudad":ciudad,
        })

        console.log(listaDatos)
        localStorage.setItem('UsuariosRegistrados', JSON.stringify(listaDatos))
        

        //Limpiar los datos del form
        limpiarForm()
        mostrarDatos()


    }

})

function limpiarForm(){
    let campos = ['cedula',
    'nombre',
    'apellido',
    'edad',
    'email',
    'Ciudad']

    campos.forEach(campos => {
        document.getElementById(campos).value = ""
    })

}

function mostrarDatos(){
    let listaDatos;

    if(localStorage.getItem('UsuariosRegistrados') == null){
        listaDatos = []
    }
    else{
        listaDatos = JSON.parse(localStorage.getItem('UsuariosRegistrados'))
    }
    
    let html = '';
    let numeroUsuario = 1;

    listaDatos.forEach(function(indice,valor){
        html += "<tr>"

        html += "<td>" + numeroUsuario++ + "</td>"
        html += "<td>" + indice.Cedula+ "</td>"
        html += "<td>" + indice.Nombre+ "</td>"
        html += "<td>" + indice.Apellido+ "</td>"
        html += "<td>" + indice.Edad+ "</td>"
        html += "<td>" + indice.Correo+ "</td>"
        html += "<td>" + indice.Ciudad+ "</td>"
        html += "<td><button class ='btn btn-warning' onclick='ActualizarDatos("+valor+")'> Actualizar datos </button> <button class ='btn btn-danger m-2' onclick='BorrarDatos("+valor+")'>Eliminar Usuario</button></td>"
        html += "</tr>"
    })

    document.getElementById('tableBody').innerHTML = html
    
}
window.onload = mostrarDatos()

function BorrarDatos(valor){

    usuarioResgistrados = JSON.parse(localStorage.getItem('UsuariosRegistrados')) || [];
   
    usuarioResgistrados.splice(valor,1);

    localStorage.setItem('UsuariosRegistrados', JSON.stringify(usuarioResgistrados))
        

    mostrarDatos()


}

function ActualizarDatos(valor){

    usuarioResgistrados = JSON.parse(localStorage.getItem('UsuariosRegistrados')) || [];

    document.getElementById('guardar').style.display = 'none';
    document.getElementById('actualizar').style.display = 'block'

    document.getElementById('cedula').value = usuarioResgistrados[valor].Cedula;
    document.getElementById('nombre').value = usuarioResgistrados[valor].Nombre;
    document.getElementById('apellido').value = usuarioResgistrados[valor].Apellido;
    document.getElementById('edad').value = usuarioResgistrados[valor].Edad;
    document.getElementById('email').value = usuarioResgistrados[valor].Correo;
    document.getElementById('Ciudad').value = usuarioResgistrados[valor].Ciudad;


    document.getElementById('actualizar').addEventListener('click', () => {
        if(validarDatos){
            usuarioResgistrados[valor].Cedula = document.getElementById('cedula').value
            usuarioResgistrados[valor].Nombre = document.getElementById('nombre').value
            usuarioResgistrados[valor].Apellido = document.getElementById('apellido').value
            usuarioResgistrados[valor].Edad = document.getElementById('edad').value
            usuarioResgistrados[valor].Correo = document.getElementById('email').value
            usuarioResgistrados[valor].Ciudad = document.getElementById('Ciudad').value

            localStorage.setItem('UsuariosRegistrados', JSON.stringify(usuarioResgistrados));

        }

        document.getElementById('guardar').style.display = 'block';
        document.getElementById('actualizar').style.display = 'none'

        limpiarForm();
        mostrarDatos();
    })

}
