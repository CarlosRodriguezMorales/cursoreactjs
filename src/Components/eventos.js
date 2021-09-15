import React, { Component } from 'react';

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }

    this.sumar= this.sumar.bind(this)
    this.restar= this.restar.bind(this)
    }

    sumar(e){
        console.log("sumando")
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(e){
        console.log("restando")
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>eventos en componente de clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

//properties initializer
export class EventosES7 extends Component{
    state = {
        contador:0
    }

    //funciones de flecha
    sumar = (e) =>{
        console.log("sumando")
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar = (e) => {
        console.log("restando")
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>eventos en componente de clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        )
    }
}

/*function Boton(props) {
    return<button onClick={props.myOnClick}>boton hecho componente</button>
}*/

/*const Boton = (props) =>(
    <button onClick={props.myOnClick}>boton hecho componente</button>
)*/

const Boton = ({myOnClick}) =>(
    <button onClick={myOnClick}>boton hecho componente</button>
)



export class MasSobreEventos extends Component{
    handleClick=(e, msg)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(msg)
    }    

    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e) => this.handleClick(e,"pasando parametros desde eventos")}>Saludar</button>
                {/*eventos personalizados*/}
                {/*<Boton onClick= {(e) => this.handleClick(e,"pasando parametros desde eventos")}/>*/}
                {<Boton myOnClick= {(e) => this.handleClick(e,"pasando parametros desde eventos")}/>}
            </div>
        )
    }
}