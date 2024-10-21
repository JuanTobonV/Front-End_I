/**
 *  Array en Javascript
 * Un arreglo es una colección de datos de elementos en una misma variable
 * 
 */

//Crear un array

let frutas = ['Manzana', 'Banano']

//JS permite arrays con elementos mixtos
const letters = ["a", 5, true];

//Accediendo a un elemento del arreglo

console.log(letters[2]) // -> Imprime true

//Agregando manualmente elementos al array

letters[6] = "tatiana"
letters.push('miró')

console.log(letters)

//Podemos almacenar funciones en los arreglos

let mixto = [
    "letras",
    3,
    true,
    function saludar(){
        console.log("Hola desde el arreglo");
    },

    () => {
        console.log("si");
    },

    //Tambien podemos almacenar otro arreglo

    ["David", 3, "abogado"]


]

console.log(mixto)


// ¿Cómo podemos ejecutar una función dentro de un array?

console.log(mixto[3]())
console.log(mixto[4]())
console.log(mixto[5][2])




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
    Objetos en JS
    Colección de datos relacionados y/o funcionalidades dinámicos de pares clave-valor
*/

//Declarando un objeto

const objeto = {};

const player = {
    name: "Manz",
    life: 99,
    power: 10
}

//Obteniendo datos del objeto

console.log(player.name)

let objetoMixto ={
    clave1: "letras",
    clave2:32,
    clave3: true,
    clave5: function saludar(){
        console.log("hola objeto")
    },

    clave6: {
        nombre: "Rodrigo",
        edad: 20
    },

    clave7:[1,2,3],
}

console.log(objetoMixto.clave5())

console.log(objetoMixto.clave6.nombre)

console.log(objetoMixto.clave7[0])