import React from 'react';

export default class Slide extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="vh-100 w-100">
        {this.props.children}
      </div>
    );
  }
}
