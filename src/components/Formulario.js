import styled from '@emotion/styled'
import React, { useState } from 'react'
import { calculaPlan, calcularMarca, obtenerDiferenciaYear } from '../helper';
import PropTypes from 'prop-types';

const Formulario = ({guardarResumen,guardarCargando}) => {

    const [error,guardaError]=useState(false);

    const [datos,guardarDatos]=useState({
        marca: '',
        year: '',
        plan: ''
    });
    const[fechas]=useState([2021,2020,2019,2018,2017,2016,2015,2014,2013,2012]);
    //Extraer datos
    const {marca,year,plan}=datos;
    //Leer los datos del formulario
    const obtenerInformacion = e =>{
    
        guardarDatos({...datos,[e.target.name]:e.target.value});   
    }
    

    //Cuando el usuario presiona submit
    const cotizarSeguro = e =>{
        e.preventDefault();
        if(marca.trim()==='' || year.trim()===''||plan.trim()===''){
            guardaError(true);
            return;
        }
        guardaError(false);

        //una base de 2000
        let resultado=2000;

        //obtener la diferencia de años 
        const diferencia = obtenerDiferenciaYear(year);
        
        //por cada año hay que restar 3%
        resultado-=((diferencia*3)*resultado)/100;
        
        //americano 15%
        //asiatico 5%
        //Europeo 30%
        resultado=calcularMarca(marca)*resultado;
        
        //Basico aumenta 20% 
        //completo 50%
        const incrementoPlan = calculaPlan(plan);
        resultado=parseFloat(incrementoPlan * resultado).toFixed(2);//.toFixed(2) devuelve 2 digitos despues del punto
        
        guardarCargando(true);
        
        setTimeout(() => {
            //elimina el spinner
            guardarCargando(false);
            //Pasa la informacion al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            })
            
        }, 2000);

         
    }

    return (
        <>
            <form
                onSubmit={cotizarSeguro}
            >
                {error?<Error>Todos Los Campos Son Obligatorios</Error> : null  }

                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="americano">-- Americano --</option> 
                        <option value="europeo">-- Europeo --</option> 
                        <option value="asiatico">-- Asiatico --</option>  
                         
                    </Select>
                </Campo>
                <Campo>
                    <Label>AÑO</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtenerInformacion}
                    >
                        {/* <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>  */}
                       <option value="">-- Seleccione --</option>
                         {
                            fechas.map(elemento=>(
                            <option key={elemento} value={elemento}>{elemento}</option>
                            ))
                         }
                    </Select>
                </Campo>
                <Campo>
                    <Label>Plan</Label>
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan === "basico"}
                        onChange={obtenerInformacion}
                    /> Basico 
                    <InputRadio
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan === "completo"}
                        onChange={obtenerInformacion}  
                    />   Completo
                </Campo>
                <Boton type="submit">Cotizar</Boton>
            </form>   
        </>
    )
}

export default Formulario

//PropTypes

Formulario.propTypes={
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}


//Styles

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem; 
`;

const Campo =styled.div`
    display:flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem; 
`;
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
     
`;