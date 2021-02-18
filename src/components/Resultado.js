import styled from '@emotion/styled'
import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';

const Resultado = ({cotizacion}) => {
    return(
    (cotizacion===0)
        ?<Mensaje>Elije Marca, Año y Tipo de Seguro</Mensaje>
        :(
            <ResultadoCotizacion> 
                <TransitionGroup
                    component={null}
                    className="resultado"
                    >
                <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{ enter: 500, exit:500 }}
                    >
                <Total>El total es: $ {cotizacion}</Total>
                </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
    )
}

export default Resultado

//PropTypes
Resultado.propTypes={
    cotizacion: PropTypes.number.isRequired,
}

//styled

const ResultadoCotizacion  = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127,224,237);
    margin-top:  1rem;
    position: relative;
`;

const Total = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;