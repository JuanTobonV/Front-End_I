import { useState } from 'react'

import './App.css'

//import pizza from '../public/vite.svg'

function App() {
  // Definir los estados para los valores
  const [tipoPizza, setTipoPizza] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [ingredientesExtra, setIngredientesExtra] = useState("");
  const [total, setTotal] = useState(0);

  // Función para calcular el total
  const calcularTotal = () => {
    let precioTipoPizza = 0;
    let precioIngredientesExtra = 0;

    // Determinar el precio de la pizza según el tipo
    switch(tipoPizza) {
      case "1":
        precioTipoPizza = 14000;
        break;
      case "2":
        precioTipoPizza = 16000;
        break;
      default:
        precioTipoPizza = 0;
    }

    // Determinar el precio de los ingredientes extra
    switch(ingredientesExtra) {
      case "3":
        precioIngredientesExtra = 2000;
        break;
      case "4":
        precioIngredientesExtra = 10000;
        break;
      default:
        precioIngredientesExtra = 0;
    }

    // Calcular el total
    let cantidadTotal = (precioTipoPizza + precioIngredientesExtra) * cantidad;
    setTotal(cantidadTotal);
  }





  return (
    <>
      <section className='container'>
          <div className='mainTitle'>
            <h1>Bienvenido a TitoPizza</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque necessitatibus officia amet molestiae quam repellendus assumenda ipsa? Quam, tenetur.
            </p>
          </div>

          <div className='menu'>

            <div>
              <img alt="" />
            </div>

            <div>
              <h1>
                  Selecciona tu pizza
              </h1>

              <form action="">
                <label htmlFor="tipoPizza">Pizza</label>
                <select id="tipoPizza" value={tipoPizza} onChange={e => setTipoPizza(e.target.value)}>
                  <option value="1">Queso $ 14.000</option>
                  <option value="2">Jamón y Queso $ 16.000</option>
                </select>

                <label htmlFor="">Cantidad</label>
                <input type="number" id="cantidadPizza" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} min="1"/>

                <label htmlFor="ingredientesExtra">Ingredientes Extra:</label>
                <select name="" id="ingredientesPizza" value={ingredientesExtra} onChange={e => setIngredientesExtra(e.target.value)}>
                  <option value="3">Maiz: $2.000</option>
                  <option value="4">Queso: $10.000</option>
                </select>

                <button onClick={calcularTotal()}>Calcular total</button>
              </form>

            </div>
            
          </div>


          <div className='dashboard'>
            <table>
              <thead>
                <th>
                  Nombre producto
                </th>

                <th>
                  Cantidad
                </th>

                <th>
                  precio
                </th>
                
              </thead>

              <tbody>

              </tbody>
            </table>

             <h2>Total: ${total}</h2>

          </div>
      </section>
    
    </>
  )

}

export default App
