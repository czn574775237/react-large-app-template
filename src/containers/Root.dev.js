import React from 'react';
import Devtools from './Devtools';

export default class Root extends React.Component {
  render() {
    return (
      <div className="root-wrapper">
        {this.props.children}
        <Devtools />
      </div>
    );
  }
}
