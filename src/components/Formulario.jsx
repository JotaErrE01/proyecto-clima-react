import { useState } from "react";


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
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {msj && <p className="red darken-4 error">Todos los campos son obligatorios</p>}
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
 
export default Formulario;