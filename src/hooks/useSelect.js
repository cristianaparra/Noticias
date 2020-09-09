import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state dek custom hook
    const [state, actualizarState] = useState('')

    const SelecNoticias = () => (
        <select
            className='browser-default'
        >
            <option value=''>-- Seleccione --</option>
        </select>
    )

    return [state, SelecNoticias];
}

export default useSelect;