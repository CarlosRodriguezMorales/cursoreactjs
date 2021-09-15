import React from 'react'
import logo from './logo.svg';
import './App.css';
import Componente from './Components/componente';
import Propiedes from './Components/propiedades';
import Estado from './Components/estado';
import RenderizadoCondicional from './Components/renderizadoCondicional';
import RenderizadoElementos from './Components/renderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './Components/eventos';
import Padre from './Components/comunicacionComponentes';
import CicloVida from './Components/CicloVida';
import AjaxApis from './Components/AjaxApis';
import ContadorHooks from './Components/ContadorHooks';
import ScrollHooks from './Components/scrollHooks';
import RelojHooks from './Components/RelojHooks';
import AjaxHooks from './Components/AjaxHooks';
import HooksPersonalizados from './Components/HooksPersonalizados';
import Referencias from './Components/Referencias';
import Formularios from './Components/Formularios';
import Estilos from './Components/Estilos';
import ComponentesEstilizados from './Components/ComponentesEstilizados';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Editar <code>src/App.js</code> and guarda to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>            
          </section>
          <section>
            <Componente msg='Soy un componente desde una prop por funcion flecha'/>
            <hr/>
            <Propiedes 
              cadena="esto es una cadena de texto"
              numero={25}
              boolean={true}
              arreglo={[1,2,3]}
              objeto={{nombre:"carlos", correo:"carlos@correo.com" }}
              elementoReact={<i>esto es un elemento de React</i>}
              funcion={(num)=>num * num}
              componenteReact={<Componente msg="Soy es un componente enviado por props"/>}
            />
            <hr/>
            <Estado/>
            <hr/>
            <RenderizadoCondicional/>
            <hr/>
            <RenderizadoElementos/>
            <hr/>
            <EventosES6/>
            <hr/>
            <EventosES7/>
            <hr/>
            <MasSobreEventos/>
            <hr/>
            <Padre/>
            <hr/>
            <CicloVida/>
            <hr/>
            <AjaxApis/>
            <hr/>
            <ContadorHooks titulo="seguidores"/>
            <hr/>
            <ScrollHooks/>
            <hr/>
            <RelojHooks/>
            <hr/>
            <AjaxHooks/>
            <hr/>
            <HooksPersonalizados/>
            <hr/>
            <Referencias/>
            <hr/>
            <Formularios/>
            <hr/>
            <Estilos/>
            <hr/>
            <ComponentesEstilizados/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
