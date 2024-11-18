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
        html += "<td><button class = 'btn btn-warning'> Actualizar datos </button> <button class ='btn btn-danger m-2'>Eliminar Usuario</button></td>"
        html += "</tr>"
    })

    document.getElementById('tableBody').innerHTML = html
    
}
window.onload = mostrarDatos()
