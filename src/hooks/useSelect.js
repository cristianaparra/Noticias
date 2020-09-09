import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state dek custom hook
    const [state, actualizarState] = useState(stateInicial)

    const SelecNoticias = () => (
        <select
            className='browser-default'
            value={state}
            onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
          ))}
        </select>
    )

    return [state, SelecNoticias];
}
// string stateInicial, objet opciones
export default useSelect;

// api key b7bd8c20f52f44a2beccc2af97675cb8