import React from 'react';
import {connect} from 'react-redux';

class UserView extends React.Component {

  render() {
    return (
      <div>
        <h1>User View</h1>
      </div>
    );
  }
}
export default connect((state) => {
  return {user: state.user};
})(UserView);
