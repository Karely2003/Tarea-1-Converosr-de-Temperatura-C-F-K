

import './App.css'

function App() {

  
 
  type Temperatura = 'Celsius' | 'Fahrenheit' | 'Kelvin';

  const valorInicial = 8;
  const unidadInicial: Temperatura = 'Celsius';

  let Fahrenheit = 0;
  let Kelvin = 0;
  let Celsius = 0;

  function convertirTemperatura(valorInicial: number, Temp: Temperatura) {
    if (Temp == 'Celsius') {
      Fahrenheit = (valorInicial * 9/5) + 32;
      Kelvin = valorInicial + 273.15;
    } else if (Temp == 'Fahrenheit') {
      Celsius = (valorInicial - 32) * 5/9;
      Kelvin = (valorInicial - 32) * 5/9 + 273.15;
    } else { // Kelvin
      Celsius = valorInicial - 273.15;
      Fahrenheit = (valorInicial - 273.15) * 9/5 + 32;
    }
  }

  convertirTemperatura(valorInicial, unidadInicial);

  return (
    <>
      <h1>Conversor de temperaturas °C, °F, K</h1>
      <h2>Valor Inicial: {valorInicial}° {unidadInicial}</h2>
      <ul>
        <li>Fahrenheit: {Fahrenheit}°</li>
        <li>Kelvin: {Kelvin}°</li>
        <li>Celsius: {Celsius}°</li>
      </ul>
    </>
  )
}
export default App

