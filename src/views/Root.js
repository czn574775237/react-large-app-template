import React from 'react';

// import Devtools from './Devtools';

export default class Root extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this._renderNav()}
        {this.props.children}
        {this._renderDevtools()}
        <Devtools />
      </div>
    );
  }

  _renderNav() {
    return (
      <nav></nav>
    );
  }

  _renderDevtools() {

    // if (__DEV__) {
    //   const Devtools = require('./Devtools');
    //   return (
    //     <div className="devtools">
    //       <Devtools />
    //     </div>
    //   );
    // }

    return null;
  }
}
