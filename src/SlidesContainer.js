import React from 'react';
import restyle from 'restyle';

export default class SlidesContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }

  restyle({
        '.fadeinoutanim': {
          animationName:'fadeinout',
          animationDuration: '2s'
        },
        '@keyframes fadeinout': {
          '0%' : {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      })
  }

  componentDidMount() {
    this.setupEvents();
  }

  setupEvents() {
    document.addEventListener('keydown', (ev)=>{
      let newIndex = this.state.index;
      switch(ev.keyCode) {
        case 37:
          newIndex = this.state.index === 0 ? 0 :
            this.state.index-1;
          this.setState({...this.state, index: newIndex})
          break;
        case 39:
          newIndex = this.state.index === this.props.children.length ? this.state.index : this.state.index + 1;
          this.setState({...this.state, index: newIndex})
          break;

      }
      console.log(ev.keyCode, this.state);
    })
  }

  render() {
    const selectedChild = React.cloneElement(this.props.children[this.state.index], {
      className:'fadeinoutanim vh-100 vw-100',
      key: this.state.index
    })
    return (<div>{selectedChild}</div>);
  }
}
