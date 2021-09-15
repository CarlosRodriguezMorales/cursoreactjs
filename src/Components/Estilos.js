import React from 'react';
import './Estilos.css';
import moduleStyles from './Estilos.module.css';
import './Estilos.scss';

export default function Estilos(params) {
    let myStyles={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return(
        <>
            <h2>Estilos CSS con react</h2>
            <h3 className="bg-react"> Estilos en hoja CSS externa</h3>
            <h3 className="bg-react" style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en linea</h3>
            <h3 className="bg-react"> 
            Agregar Normalizes  con 
                <br/><code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con modulos</h3>
            <h3 className="bg-sass">Estilos con sass (instalar paquete)</h3>
        </>
    )
} 