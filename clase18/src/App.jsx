import React, {useState} from "react";

/**
 * 
 * useState: importamos este hook de react para manejar el estado dentro de los componentes funcionales, para que nos permita crear variables de estado,
 * que pueden cambiar durante el ciclo de vida del componente
 */

function App(){
  
  //Estado para las tareas

  const [task, setTask] = useState([]);

  const [taskInput, setTaskInput] = useState('');

  //funcion para agregar una tarea

  const addTask = () => {
    if(taskInput.trim() !== ''){
      setTask([...task, taskInput]);
      setTaskInput(''); //Limpiar el campo de entrada
    }
  };

  //Funcion para eliminar una tarea
  const deleteTask = () => {
    const deleteTask = (taskIndex) => {
      setTask(task.filter((_,index) => index !== taskIndex));
    };
  }



  return (
    <>

    </>
  )
}
