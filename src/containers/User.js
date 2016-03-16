import React from 'react';
import {connect} from 'react-redux';

class User extends React.Component {

  render() {
    return (
      <div>
        <h2>HELLO</h2>
      </div>
    );
  }
}
export default connect((state) => {
  return {user: state.user};
})(User);
// export default User;
