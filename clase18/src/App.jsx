import React, { useState } from "react";
//Importamos React por que es necesario para escribir componentes en JSX
//useState: importamos este Hook de react para manejar el estado dentro de los componentes funcionales, para que nos permita crear variables de estado, que pueden cambiar durante el ciclo de vida del componente

function App()
{
    //function App() aqui definimos un componente funcional llamado App. que es el componente principal de nuestra aplicacion. Este contiene todo el codigo relacionado con la logica de la lista de tareas.

    //Estado para las tareas
    const [tasks, setTasks] = useState([]);
    const [tasksInput, setTasksInput] = useState('');
    //tasks: Este es un estado que se usa para almacenar las tareas que el usuario ha agregado.Inicialmente es un arreglo vacio por que no hay tareas.
    //tasksInput: Este estado, almacena el texto que el usuatio escribe en el campos de entrada de la tarea. Se inicializa con una cadena vacia ''
    //useState devuelve un arreglo con dos valores:
    //1.El estado actual, por ejemplo, tasks o taskInput
    //2.Una funcion para actualizar el estado, por ejemplo setTasks o setTasksInput


    //Funcion para agregar una tarea
    const addTasks = () => {
      if(tasksInput.trim() !== '')
      {
        setTasks([...tasks, tasksInput]);
        setTasksInput(''); //Limpiar el campo de entrada
      }
    };


    /*
      addTask: Es una función que se ejecuta cuando el usuario hace click en un botón

      1. Primero verificamos si el valor de taskInput no está vacio o si contiene espacios en blanco
      
      if(tasksInput.trim() !== '')
      {}
      
        Si está vacio, no se agrega ninguna tarea

      2. Si la entrada no esta vacia, utilizamos setTasks para agregar la nueva tarea al estado task. Esto se hace
      creando un nuevo arregl oque contiene las tareas anteriores y añadiendo el valor enviado por taskInput

      Tambien resetea el setTaskInput como un string vacio

    */
     
    //Funcion para eliminar una tarea
    const deleteTask = (tasksIndex) => {
        setTasks(tasks.filter(( _ , index) => index !== tasksIndex))
    };


    /* 
      1. la función recibe taskIndex, que es el indice del usuario que desea eliminar
      2. Utilizamos filter para crear un nuevo arreglo de tareas, pero sin tarea cuyo indice coincide con taskIndex.

      El metodo filter devuelve todos los elementos del arrelo, excepto el que cumpla la condición

    */

    return(
      <>

        <h1>Lista de tareas con REACT</h1>
        <input type="text" value={tasksInput}
         onChange={(userInput) => setTasksInput(userInput.target.value)} placeholder="Escribe una tarea" 
         />

         <button onClick={addTasks}>Agregar Tarea</button>

         <ul>
          
          {
            tasks.map((task, index) => {
              return(
                <li key={index}>
                  {task}
                  <button onClick={()=>deleteTask(index)}>Eliminar</button>
                </li>)
            })
          }
         </ul>
      
      </>
    )

    /*
      Campo de entrada <input />

      1. value = {tasksInput} Vincula el valor del campo de entrada al estado taskInput, de modo que el campo siempre muestre lo que el
      usuario ha escrito

      2. onChange((e) => setTasksInput(e.target.value)) cada vez que el usuario escribe algo en el campo, actualizaremos el estado taskInput con el nuevo valor
    

      (userInput) es el evento que se pasa automaticamente al escribir
      (userInput.target.value) Contiene el texto actual ingresado en el campo de entrada

      setTaskInput Actualiza el valor del estado setTaskInput con el valor ingresado, manteniendo el campo sincronizado con el estado del componente
    
    
      */
}

export default App