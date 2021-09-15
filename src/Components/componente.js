//import React, { Component } from 'react';
import React from 'react';


//FUNCION EXPRESADA
const componente = (props)=><h2>{props.msg}</h2>

/*componente por funcion
function componente(props){
    return <h2>{props.msg}</h2>
}
/*

/*Componente basado en clase
class componente extends Component{
    render(){
        return(<h2>{this.props.msg}</h2>)
    };
}
*/

export default componente;