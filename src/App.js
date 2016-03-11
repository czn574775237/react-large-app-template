import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.renderNav()}
        {this.props.children}
      </div>
    );
  }

  renderNav() {
    return (
      <nav></nav>
    );
  }
}