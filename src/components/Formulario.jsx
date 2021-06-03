import { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

    //state del mensaje
    const [msj, setMsj] = useState(false);

    //Extraer ciudad, pais
    const {ciudad, pais} = busqueda;

    //funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        setBusqueda({...busqueda, [e.target.name]: e.target.value});
    }

    //submit
    const handleSubmit = e => {
        e.preventDefault();

        //validar
        if(!ciudad.trim() || !pais.trim()){
            setMsj(true);
            return;
        }

        //pasarlo al componente principal
        setConsultar(true);
        setMsj(false);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {msj && <Error msj="Todos los campos son obligatorios"/>}
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="EC">Ecuador</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
            <button 
                className="waves-effect waves-light btn-large btn-block yellow col s12 input-field accent-4 black-text"
            >Consultar Clima</button>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired
}
 
export default Formulario;