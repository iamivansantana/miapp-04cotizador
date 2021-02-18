import styled from '@emotion/styled';
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';



function App() {
 
  const [resumen,guardarResumen]=useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  });

  //state cargando
  const [cargando, guardarCargando]=useState(false);

  //Extraer Datos
  const{cotizacion,datos}=resumen;

  return (
    <Contenedor>
        <Header 
          titulo='Cotizador de Seguros'
        />
        <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />
          {cargando?<Spinner />:null}
          <Resumen 
            datos={datos}
          /> 
          {!cargando ? 
              <Resultado 
              cotizacion={cotizacion}
              />
            :  null
          }
          
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;



//Styled
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem; 
`;