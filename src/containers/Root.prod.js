import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <div className="root-wrapper">
        {this.props.children}
      </div>
    );
  }
}
