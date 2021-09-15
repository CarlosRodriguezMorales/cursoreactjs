import React from 'react';
import propTypes from 'prop-types';

export default function propiedades(props){
    return(
        <div>
            <h2>Propiedades</h2>
            <ul>
                <li>{props.porDefecto}</li>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean?"verdadero":"falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + "-" + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

propiedades.defaultProps={
    porDefecto:'Soy una propiedad por defeco'
}

propiedades.propTypes={
    cadena: propTypes.string.isRequired,
    numero: propTypes.number
}