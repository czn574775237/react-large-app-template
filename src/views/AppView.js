import React from 'react';

class AppView extends React.Component {
  render() {
    return (
      <div className="app-view">
        {this.props.children}
      </div>
    )
  }
}

export default AppView
