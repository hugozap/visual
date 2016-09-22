import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/webcomponents.js/webcomponents-lite.js'
import 'aframe';
import 'aframe-extras';
import SlidesContainer from './SlidesContainer.js'
import {Scene, Entity, Sky} from 'aframe-react'
import SceneContainer from './SceneContainer.js'
import '../node_modules/tachyons/css/tachyons.css'
import BasicScene from './scenes/basic.js'
import GridScene from './scenes/gridscene.js'
import GridScene2 from './scenes/gridscene2.js'
import GifGridScene from './scenes/GifGridScene.js'
import GifGridSceneAnimated from './scenes/GifGridSceneAnimated.js'
import SpheresScene from './scenes/Spheres.js'
import Slide from './Slide.js'
import functional_ui from './img/functional_ui.png'

class Slides extends Component {

  render() {
    const sceneStyle = {
      height: 400
    }

    return (
      <div className="App helvetica f2">
        <SlidesContainer>
          <Slide>
            <div className="dt tc w-100 h-100">
              <div className="dtc v-mid h-100">

              </div>
              <div className="dtc v-mid tc h-100">
                <h1 className="f1 ttu ">Dándole vida a nuestra UI</h1>
                <div>
                  @hugozap
                </div>
                <div className="mt3">
                  <span>Código: </span>
                  <a className="link" href="https://github.com/hugozap/visual">https://github.com/hugozap/visual</a>
                </div>
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="dt h-100">
              <div className="dtc v-mid w-50 pa3">
                <h1 className="f1 ttc">El impacto de nuestras interfaces</h1>
                <p>Re-pensar cómo influyen nuestras interfaces en los usuarios de la Web</p>
              </div>
              <div className="dtc v-top w-50 h-100 tl pa4 bg-black-10">
                <h2 className="f2 ttu ln-title tracked">Oportunidades</h2>
                <ul className="list tl f2">
                  <li className="h3">Educación</li>
                  <li className="h3">Arte</li>
                  <li className="h3">Inmersión (WebVR) </li>
                  <li className="h3">Accesibilidad</li>
                </ul>
                <p className="quote i calisto f3 bg-white-30 pa3">
                  Tenemos browsers mucho más potentes.Podemos aprovechar las capacidades nuevas
                  para mejorar la experiencia de nuestros usuarios (WebAudio, WebGL, WebVR...)
                </p>
              </div>
            </div>


          </Slide>

          <Slide>
            <div className="dt h-100 ">
              <div className="dtc w-50 ph4">
                <h1 className="f1 lh-title tracked">Desafíos</h1>
                <ul className="list tl  i calisto bg-white-30 pa3 f4 ">
                  <li className="bb lh-copy pv1">Convenciones visuales artificiales impuestas al usuario</li>
                  <li className="bb lh-copy pv1">Saltos inesperados</li>
                  <li className="bb lh-copy pv1">Inconsistencia (color, espacio) </li>
                  <li className="bb lh-copy pv1">Poco contexto para realizar una acción </li>
                  <li className="bb lh-copy pv1">Mucho ruido (distracción de la tarea a realizar) </li>
                </ul>
              </div>
              <div className="dtc w-50 ph4 bg-light-blue black-80 tl">
                <h2 className="f1 lh-title tracked">Herramientas</h2>
                <ul className="list tl quote i calisto bg-white-30 pa3 f4">
                  <li className="p1  lh-copy">Colores</li>
                  <li className="p1  lh-copy">Transiciones</li>
                  <li className="p1  lh-copy">Animaciones</li>
                  <li className="p1  lh-copy">3D</li>
                  <li className="p1  lh-copy">Audio</li>
                </ul>
                <p className="quote i calisto f3 bg-white-30 pa3">
                  El cerebro humano ha evolucionado para interpretar información
                  espacial. ¿Cómo podemos aprovechar este hecho en nuestra UI?.
                </p>
              </div>
            </div>

          </Slide>

          <Slide>
            <div className="dt h-100 w-100">
              <div className="dtc w-50 ph4">
                <h1 className="f1 lh-title tracked">Animación</h1>
                <iframe src="/spheres" width="100%" height="100%" frameBorder="0"></iframe>

              </div>
              <div className="w-50 dtc v-top h-100 tl ph4" style={{backgroundColor:'#f7dcf3'}}>
                <p className="quote i calisto f3 bg-white-30 pa3">
                  ¿Cómo se mueven las cosas en la naturaleza?
                  <hr/>
                  <span> Animaciones que "se sienten bien"</span>
                </p>
                
                
                <p className="quote i calisto f3 bg-white-30 pa3"> Los saltos pueden ser problemáticos</p>

                <h1 className="f3 tracked">Variables según intención</h1>
                <ul className="list quote i calisto f3 bg-white-30 pa3">
                  <li className="p1 f4 lh-copy">Posición (apariciones) </li>
                  <li className="p1 f4 lh-copy">Tamaño (énfasis, apariciones) </li>
                  <li className="p1 f4 lh-copy">Color (énfasis) </li>
                  <li className="p1 f4 lh-copy">Transparencia (apariciones</li>

                </ul>
                <h1 className="f3 ">Easing</h1>
                <ul className="list quote i calisto f3 bg-white-30 pa3">
                  <li className="p1 f4 lh-copy">Bezier</li>
                  <li className="p1 f4 lh-copy">Basadas en modelos de física (Springs) </li>
                </ul>
              </div>            
            </div>
          </Slide>

          <Slide>
            <div className="dt w-100 h-100">
              <div className="dtc w-50 h-100">
                <iframe src="http://hugozap.neocities.org/x99/" width="100%" height="100%" frameBorder="0"></iframe>
              </div>
              <div className="dtc w-50 v-top ph4 tl" style={{backgroundColor:'#fff'}}>
                <h1 className="f2 lh-title tracked">Animación basada en física (springs) </h1>
                <p className="quote  i calisto f3 bg-black-10 pa3">
                  For 95% of use-cases of animating components,
                  we don't have to resort to using hard-coded easing curves and duration.
                  Set up a stiffness and damping for your UI element,
                  and let the magic of physics take care of the rest.
                  <span className="b db">Cheng Lou (Autor de React-Motion) </span>
                </p>
                <h1 className="f3 lh-title tracked">Principios</h1>
                <ul className="list i calisto f3 bg-black-10 pa3">
                  <li className="lh-copy">Basada en el modelo matemático</li>
                  <li className="lh-copy">Parámetros: Rigidez, elasticidad </li>
                  <li className="lh-copy">NO establecemos duración (esto afectaría el realismo de la animación) </li>
                </ul>
                <h1 className="f3 lh-title tracked">Tools</h1>
                <ul className="list i calisto f3 bg-black-10 pa3">
                  <li className="lh-copy"> <a className="link"  href="https://github.com/chenglou/react-motion">React-Motion</a></li>
                  <li className="lh-copy">
                    <a className="link" href="http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/">Spring Parameters chooser</a>
                  </li>
                  <li>
                    <a href="https://medium.com/@dtinth/spring-animation-in-css-2039de6e1a03#.5tzazopm8" className="link">
                      Spring animation with CSS (problema duración)
                    </a>
                  </li>
                  
                </ul>                
              </div>
            </div>
          </Slide>

          <Slide>
            <div className="dt w-100 h-100 tl">
            
              <div className="dtc w-50 ph4">
                <h1 className="f2">Paradigma Funcional En UI</h1>
                <img src={functional_ui} alt="UI Funcional"/>
              </div>
              <div className="dtc w-50 ph4" style={{backgroundColor:'#afc2e3'}}>
                <p className="i calisto f3 bg-white-10 pa3">En la Web es Popularizado por Elm / React</p>
                <p className="i calisto f3 bg-white-30 pa3">
                  A diferencia del modelo tradicional, con este enfoque
                  NO modificamos la UI directamente.Solo podemos modificar
                  el estado y dejamos que el sistema actualice la vista.
                </p>
                
                <h1 className="f3 lh-title tracked">Características</h1>
                
                <ul className="list tl f3 calisto f3 bg-white-30 pa3">
                  <li className="p1  lh-copy">Separación clara del estado y la vista</li>
                  <li className="p1  lh-copy">Facilita la composición de elementos de UI</li>
                  <li className="p1  lh-copy">Podemos re-crear la vista a partir del estado en cualquier momento.</li>
                  <li className="p1  lh-copy">Es más fácil de razonar!</li>
                  <li className="p1  lh-copy">Es más divertido</li>
                </ul>
              </div>
            </div>
            

          </Slide>

          <Slide>
            <div className="dt w-100 h-100">
              <div className="dtc w-50 h-100 ph4" style={{backgroundColor:'#afc2e3'}}>
                 <h1 className="f1 lh-title ">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
                 <p className="f2 calisto f3 bg-white-30 pa3">
                  Mozilla A-Frame: VR y 3D declarativo. 
                </p>
                <pre className="tl p2  calisto f3 bg-white-30 pa3">
                  {`
  <a-entity>
    <a-entity geometry="primitive:sphere;radius:10"
    material="color:red"
    position="0 0 -50"/>

    <a-entity camera position="0 0 0"/>
  </a-entity>
                  `}
                </pre>
              </div>
              <div className="dtc w-50 ph4 v-mid" style={{backgroundColor:'#fff'}}>
                <iframe src="/basic_aframe" width="100%" height="100%" frameBorder="0"></iframe>

              </div>                            
            </div>

          </Slide>

          <Slide>
            <div className="dt w-100 h-100">
              <div className="dtc w-50 h-100 ph4" style={{backgroundColor:'#afc2e3'}}>
                 <h1 className="f1 lh-title ">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
                 <p className="f2 calisto f3 bg-white-30 pa3">
                  Mozilla A-Frame: VR y 3D declarativo. 
                </p>
                <p className="f3 bg-white-30 pa3">
                  Ej. Componente React
                </p>
                <pre className="tl p2  calisto f3 bg-white-30 pa3">
                  {`
<Grid position={[0,-20,-70]}
  primitive={'sphere'}
  rotation={[0, 45, 0]}
  size={10}
  rows={4}
  cols={4}
  levels={4}
  colors={colors}
/>
                  `}
                </pre>
              </div>
              <div className="dtc w-50 ph4 v-mid" style={{backgroundColor:'#fff'}}>
                <iframe src="/grid1" width="100%" height="100%" frameBorder="0"></iframe>                
              </div>                            
            </div>

          </Slide>

          <Slide>
            <div className="dt w-100 h-100">
              <div className="dtc w-50 h-100 ph4" style={{backgroundColor:'#afc2e3'}}>
                 <h1 className="f1 lh-title ">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
                 <p className="f2 calisto f3 bg-white-30 pa3">
                  Mozilla A-Frame: VR y 3D declarativo. 
                </p>
                <pre className="tl p2  calisto f3 bg-white-30 pa3">
                  {`
<a-scene embedded style={{height:400}}>
  <Grid position={[0,0,-90]}
        primitive={'box'}
        rotation={[0, 45, 0]}
        size={10}
        rows={4}
        cols={4}
        levels={4}
        colors={colors}
        spaceBetween={1}
  />
  <a-entity camera position="0 0 0"
   wasd-controls="acceleration:500"/>
</a-scene>
                  `}
                </pre>
              </div>
              <div className="dtc w-50 ph4 v-mid" style={{backgroundColor:'#fff'}}>
                <iframe src="/grid2" width="100%" height="100%" frameBorder="0"></iframe>                
              </div>                            
            </div>

          </Slide>

          <Slide>
            <div className="dt w-100 h-100">
              <div className="dtc w-50 h-100 ph4" style={{backgroundColor:'#afc2e3'}}>
                 <h1 className="f1 lh-title ">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
                 <p className="f2 calisto f3 bg-white-30 pa3">
                  Componente GifGrid 
                </p>
                <pre className="tl p2  calisto f4 bg-white-30 pa3">
                  {`
 render() {

  const boxsize = this.state.size
  return (
      
    <Entity position={this.props.position}
            rotation={this.props.rotation || [0,0,0]}> 

      {this.state.points.map((p,ix) => {
      return (
        <Entity key={ix} geometry={{primitive: this.props.primitive,
          radius:this.props.size, 
          width:this.props.size,
          height: this.props.size,
          depth: this.props.size}}
          material={{shader:'gif',src: p.texture}}
          position={[p.x, p.y, p.z]}/>
        )
      })}
    </Entity>

  );
}
                  `}
                </pre>
              </div>
              <div className="dtc w-50 v-mid" style={{backgroundColor:'#fff'}}>
                <GifGridSceneAnimated/>               
              </div>                            
            </div>

          </Slide>
        </SlidesContainer>
      </div>
    );
  }
}

export default Slides;
