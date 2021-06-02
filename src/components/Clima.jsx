import React from 'react';

const Clima = ({resultado}) => {

    const {name, main} = resultado;

    if(!name){
        return null;
    }

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {(Number(main.temp) - 273.15).toFixed(2)} <span>&#8451;</span>
                </p>
                <p>Temperatura Máxima:
                    {(Number(main.temp_max) - 273.15).toFixed(2)} <span>&#8451;</span>
                </p>
                <p>Temperatura Mínima:
                    {(Number(main.temp) - 273.15).toFixed(2)} <span>&#8451;</span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;