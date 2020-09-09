import React, { Fragment, useState } from 'react';
import Header from './componnents/Header'
import Formulario from './componnents/Formulario'

function App() {

  // definir categoria

  const [categoria, guardarCategoria] = useState('')
  return (

    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
        guardarCategoria={guardarCategoria}/>
      </div>
    </Fragment>
  );
}

export default App;
