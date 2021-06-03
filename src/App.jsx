import { useEffect, useState } from "react";
import Clima from "./components/Clima";
import Error from "./components/Error";
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

  const [error, setError] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() => { 
    
    if(consultar){
      consultarApi(ciudad, pais)
        .then(setResultado);
    }

    if(resultado.cod === '404'){
      setError(true);
    }else{
      setError(false);
    }

    setConsultar(false);

    //eslint-disable-next-line
  }, [consultar, resultado])

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
              {error ? 
                <Error
                  msj="No hay Resultados"
                /> :
                <Clima 
                  resultado={resultado}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
