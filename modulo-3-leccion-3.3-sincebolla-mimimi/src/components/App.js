import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [macarrones, setMacarrones] = useState(false);
  const [patatas, setPatatas] = useState(false);
  const [nueces, setNueces] = useState(false);
  const [huevos, setHuevos] = useState(false);
  const [cebolla, setCebolla] = useState(false);
  const [cerveza, setCerveza] = useState(false);
  const handleMacarrones = (ev) => {
    setMacarrones(ev.target.checked);
  }
  const handlePatatas = (ev) => {
    setPatatas(ev.target.checked);
  }
  const handleNueces = (ev) => {
    setNueces(ev.target.checked);
  }
  const handleHuevos = (ev) => {
    setHuevos(ev.target.checked);
  }
  const handleCebolla = (ev) => {
    setCebolla(ev.target.checked);
  }
  const handleCerveza = (ev) => {
    setCerveza(ev.target.checked);
  }

  return (
    <div>
      <h1>Tortilla Mimimi</h1>
      <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
      <div>
        <label htmlFor="ingredient1">
          <input
            id="ingredient1"
            type="checkbox"
            value="macarrones"
            name="ingredients"
            onChange={handleMacarrones}
          />
          Macarrones
        </label>
      </div>
      <div>
        <label htmlFor="ingredient2">
          <input
            id="ingredient2"
            type="checkbox"
            value="patatas"
            name="ingredients"
            onChange={handlePatatas}
          />
          Patatas
        </label>
      </div>
      <div>
        <label htmlFor="ingredient3">
          <input
            id="ingredient3"
            type="checkbox"
            value="nueces"
            name="ingredients"
            onChange={handleNueces}
          />
          Nueces
        </label>
      </div>
      <div>
        <label htmlFor="ingredient4">
          <input
            id="ingredient4"
            type="checkbox"
            value="huevos"
            name="ingredients"
            onChange={handleHuevos}
          />
          Huevos
        </label>
      </div>
      <div>
        <label htmlFor="ingredient5">
          <input
            id="ingredient5"
            type="checkbox"
            value="cebolla"
            name="ingredients"
            onChange={handleCebolla}
          />
          Cebolla
        </label>
      </div>
      <div>
        <label htmlFor="ingredient6">
          <input
            id="ingredient6"
            type="checkbox"
            value="cerveza"
            name="ingredients"
            onChange={handleCerveza}
          />
          Cerveza
        </label>
      </div>
      <p>{patatas === true && huevos === true && macarrones === false && nueces === false && cebolla === false && cerveza === false ? 'Eso es, sin cebolla y poco hecha' : patatas === true && huevos === true && macarrones === false && nueces === false && cebolla === true && cerveza === false ? 'Necesito ponerle cebolla porque no sé aprovechar la materia prima. Poor me :(' : macarrones === true || nueces === true || cerveza === true ? 'No hombre, no.' : cebolla === true ? 'Quita eso' : ''}</p>
    </div>
  );
}

export default App;
