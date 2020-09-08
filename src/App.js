import React, { Fragment } from 'react';
import Header from './componnents/Header'

function App() {
  return (

    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <h1>Formulario</h1>
      </div>
    </Fragment>
  );
}

export default App;
