import React, { Component } from 'react';

class Reloj extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.log(3,"el componete ha sido eliminado del DOM")
    }

    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props)
        console.log(0,"el componente se inicializa No esta en el DOM")

        this.state={
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.temporizador=null
    }

    tictac=()=>{
        this.temporizador= setInterval(() => {
            this.setState({
                hora:new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    iniciar=()=>{
        this.tictac()
        this.setState({
            visible : true
        })
    }

    detener=()=>{
        clearInterval(this.temporizador)
        this.setState({
            visible : false
        })
    }    

    componentDidMount(){
        console.log(1,"el componente ya se encuentra en el DOM")
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2,"El estado o las props del componente han cambiado")
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount(){
        console.log(3,"el componete ha sido eliminado del DOM")
    }

    render(){
        console.log(4,"el componente se dibuja(o se redibuja si exite algun cambio) en el DOM")
        return(
            <>
                <h2>Ciclo de vida de los componentes de clase</h2>
                { this.state.visible && <Reloj  hora={this.state.hora}/>}
                <button onClick={this.iniciar}>iniciar</button>
                <button onClick={this.detener}>detener</button>
            </>
        )
    }
}