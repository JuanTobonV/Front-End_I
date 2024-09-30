function mostrar(){
    let nombre = document.getElementById('nombre').value;

    console.log(nombre)

    let apellido = document.querySelector('#apellido').value;
    console.log(apellido)

    let edad = document.querySelector('#edad').value;
    console.log(edad)

    document.getElementById("informacion").innerText = `Tu nombre es: ${nombre} \n Tu apellido eso: ${apellido} \n Tu edad es: ${edad}`
}