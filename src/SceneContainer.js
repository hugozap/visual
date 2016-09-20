import React from 'react';
import backImg from './back1.jpeg'

export default class SceneContainer extends React.Component {
  static propTypes = {
    height: React.PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleClick() {
    this.setState({...this.state, active:true})
  }

  render() {
    const Scene = this.state.active ? (
      <a-scene embedded style={{height:this.props.height}}>
        {this.props.children}
      </a-scene>
    ) : 
    (
      <div onClick={this.handleClick.bind(this)} style={{height:this.props.height}}
           className="dt w-100 h-100 bg-light-blue pointer relative">
          <div className="dtc v-mid pl3">
              <h1 className="f1 white">
                Show
              </h1>
          </div>

      </div>
    )
    return Scene
  }
}
