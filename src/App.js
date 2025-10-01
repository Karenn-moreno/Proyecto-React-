
import './App.css';
import Producto from './Producto';
import Detalle from './Detalle';
import { useState } from 'react';
import Formulario from './Formulario';

function App() {
  const [pagina, setPagina] = useState("producto");
  return (

    <div className="App">
      {pagina === "producto" ? (
        <Producto cambiarPagina={setPagina} />
      ) : (
        <Detalle cambiarPagina={setPagina} />
      )}

    </div>
  );
}
export default App;
