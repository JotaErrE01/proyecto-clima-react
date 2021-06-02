import { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
import Header from "./components/header";
import {consultarApi} from './helpers/consultarApi'


function App() {

  //state del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);

  //state del resultado
  const [resultado, setResultado] = useState({});

  const {ciudad, pais} = busqueda;

  useEffect(() => { 
    
    if(consultar){
      consultarApi(ciudad, pais)
        .then(dataClima => setResultado(dataClima));
    }

    setConsultar(false);

  }, [consultar, pais, ciudad])

  return (
    <>
      <Header 
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Clima 
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
