import React from 'react';
import SceneContainer from '../SceneContainer.js'
import GifGrid from '../GifGrid.js'
import g1 from '../img/1.gif'
import g2 from '../img/2.gif'
import g3 from '../img/3.gif'
import g4 from '../img/4.gif'
import g5 from '../img/5.gif'


export default class GifGridScene extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      gifs:[
        {id:'img1', url:g1},
        {id:'img2', url:g2},
        {id:'img3', url:g3},
        {id:'img4', url:g4},
        {id:'img5', url:g5},
        {id:'img6', url:'https://media4.giphy.com/media/tMyCJmeXHBetq/200w.gif'},
        {id:'img7', url:'https://media1.giphy.com/media/wWue0rCDOphOE/200w.gif'},
      ]
    }
    this.state.gifRefs = this.state.gifs.map(g => {
      return `url(${g.url})`
    })
  }

  render() {

    return (
      <SceneContainer height={800}>
        <a-assets>
           {this.state.gifs.map((g,ix) => {
              return (
                  <img key={ix} id={g.id} src={g.url}/>
              )
           })}
         </a-assets>

        <GifGrid position={[0,0,-90]}
              primitive={'box'}
              rotation={[0, 45, 0]}
              size={10}
              rows={5}
              cols={4}
              levels={4}
              spaceBetween={5}
              textures={this.state.gifRefs}
        />
      </SceneContainer>
    );
  }
}
