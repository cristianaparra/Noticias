import React, { Fragment } from 'react';
import Header from './componnents/Header'
import Formulario from './componnents/Formulario'

function App() {
  return (

    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
