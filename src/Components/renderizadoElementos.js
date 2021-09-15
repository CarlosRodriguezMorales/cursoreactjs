import React, { Component } from 'react'
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blanck">{props.el.name}</a>            
        </li>
    )
}

export default class renderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state={
            Estaciones:["Primavera","Verano","Otoño","Invierno"]
        }
    }

    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.Estaciones.map((el)=><li key={el}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks frontend js</h3>
                <ul>
                    {
                    data.frameworks.map((el)=><ElementoLista key={el.id} el={el}/>)
                    }
                </ul>
            </div>
        )
    }
 }