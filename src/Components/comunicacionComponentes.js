import React, { Component } from 'react'

export default class Padre extends Component{
    state={
        contador:0
    }

    suma=(e)=>{
        this.setState({
            contador:this.state.contador + 1
        })
    }

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <p><b>{this.state.contador}</b></p>
                <Hijo incrementar={this.suma} msg="1er mensaje"/>
                <Hijo incrementar={this.suma} msg="2do mensaje"/>
            </>
        )
    }
}

function Hijo(props) {
    return (
    <>
        <h3>{props.msg}</h3>
        <button onClick={props.incrementar} >+</button>
    </>
    )
}