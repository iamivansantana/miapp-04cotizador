import styled from '@emotion/styled';
import React from 'react'
import { primeraMayuscula } from '../helper';
import PropTypes from 'prop-types';

const Resumen = ({datos}) => {
    //extraer de datos
    const{marca,year,plan}=datos;
    if (marca===''||year===''||plan==='') {
        return null;
    }
    return (
        <>
        <ContenedorResumen> 
            <h2>Resumen de Cotizacion</h2>  
            <ul>
                <li>Marca: {primeraMayuscula(marca)} </li>
                <li>Plan: {primeraMayuscula(plan)} </li>
                <li>Año del Auto: {year} </li>
            </ul> 
        </ContenedorResumen>
        </>
    )
}

export default Resumen

//PropTypes
Resumen.propTypes={
    datos: PropTypes.object.isRequired,
}


//styled
const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;

`;