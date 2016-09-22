import React from 'react';
import SceneContainer from '../SceneContainer.js'
import GifGrid from '../GifGridAnimated.js'
import g1 from '../img/1.gif'
import g2 from '../img/2.gif'
import g3 from '../img/3.gif'
import g4 from '../img/4.gif'
import g5 from '../img/5.gif'
import g6 from '../img/6.gif'


export default class GifGridSceneAnimated extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex:4,
      gifs:[
        {id:'img1', url:g1},
        {id:'img2', url:g2},
        {id:'img3', url:g3},
        {id:'img4', url:g4},
        {id:'img5', url:g5},
        {id:'img6', url:g6},
      ]
    }
    this.state.gifRefs = this.state.gifs.map(g => {
      return `url(${g.url})`
    })
    this.setupEvents();
  }

  setupEvents() {
      document.addEventListener('keydown', (ev)=> {
          switch(ev.keyCode) {
              case 38:
                this.setState({...this.state, selectedIndex: this.state.selectedIndex -1});
                ev.preventDefault();
              break;
              case 40:
                this.setState({...this.state, selectedIndex: this.state.selectedIndex +1});
                ev.preventDefault();
                
              break;
          }
      })
  }

  render() {

    return (
      <a-scene embedded style={{height:800}}>
        <a-assets>
           {this.state.gifs.map((g,ix) => {
              return (
                  <img key={ix} id={g.id} src={g.url}/>
              )
           })}
         </a-assets>

        <GifGrid position={[0,0,-30]}
              primitive={'box'}
              rotation={[0, 45, 0]}
              size={10}
              rows={4}
              cols={4}
              levels={1}
              spaceBetween={1}
              textures={this.state.gifRefs}
              selectedIndex={this.state.selectedIndex}
        />
         <a-entity camera position="10 20 -10a" look-controls wasd-controls="acceleration:500"/>

      </a-scene>
    );
  }
}
