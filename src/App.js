import React, { Fragment, useState, useEffect } from 'react';
import Header from './componnents/Header'
import Formulario from './componnents/Formulario'

function App() {

  // definir categoria

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b7bd8c20f52f44a2beccc2af97675cb8'
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])

  return (

    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario
          guardarCategoria={guardarCategoria} />
      </div>
    </Fragment>
  );
}

export default App;
