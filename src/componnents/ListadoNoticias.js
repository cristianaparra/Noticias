import React from 'react';
import Noticias from './Noticias'

const ListadoNoticias = ({ noticias }) => {
    return (

        <div className='row'>
            {noticias.map(noticias => (
                <Noticias />
            ))}
        </div>
    );
}

// noticias obj
export default ListadoNoticias;