import React, { Component } from 'react';
import 'aframe';
import 'aframe-gif-shader';
import {Scene, Entity, Sky} from 'aframe-react'
import {Motion,spring} from 'react-motion';
import _ from 'lodash';

export default class GifGrid extends Component {

  static propTypes = {
    position: React.PropTypes.array.isRequired,
    rotation: React.PropTypes.array,
    size: React.PropTypes.number,
    primitive: React.PropTypes.string,
    rows: React.PropTypes.number.isRequired,
    spaceBetween: React.PropTypes.number,
    cols: React.PropTypes.number.isRequired,
    levels: React.PropTypes.number.isRequired,
    colors: React.PropTypes.array,
    textures: React.PropTypes.array.isRequired,
    selectedIndex: React.PropTypes.number
  };


  constructor(props) {
    super(props);
  
    const size = props.size;
    const rows = _.range(props.rows);
    const cols = _.range(props.cols);
    const levels = _.range(props.levels);
    const points = [];
    const spaceBetween = props.spaceBetween || 0;
    const radius = props.size/2;
    const colors = props.colors || ['#000','#FC241B'];
    const textures = props.textures;
    let colorIter = 0;
    let textureIter = 0;
    rows.forEach((r)=>{
                cols.forEach((c)=> {
                  levels.forEach((l)=> {
                      const s = size;
                      const x = r * (s + spaceBetween);
                      const y = c * (s + spaceBetween);
                      const z = l * (s + spaceBetween);
                      const color = colors[(colorIter++) % colors.length];
                      const texture = textures[(textureIter++) % textures.length];
                      points.push({x,y,z,color, texture})
                  })
                })
              })

    this.state = { 
      points,
      radius,
    } 


  }

  componentDidMount() {
   
  }



  render() {

    const boxsize = this.state.size
    return (
        
          <Entity position={this.props.position} rotation={this.props.rotation || [0,0,0]}> 
            {this.state.points.map((p,ix) => {
                const zPos = (ix === this.props.selectedIndex) ? p.z + 10 : p.z;
                return (
                <Motion defaultStyle={{z:0}} style={{z:spring(zPos)}}>
                    {(val) => 
                        <Entity key={ix} geometry={{primitive: this.props.primitive, radius:this.props.size, width:this.props.size, height: this.props.size, depth: this.props.size}}
                        material={{shader:'gif',src: p.texture}} position={[p.x, p.y, val.z]}/>
                    }
                    
                </Motion>

             )
            })}
          </Entity>
  
    );
  }
}

