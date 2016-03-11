import React from 'react';
import {connect} from 'react-redux';
import * as UserActions from '../actions/user';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ current: e.key });

    this.props.dispatch(UserActions.userLogin({
      username: 'zhining',
      password: '123'
    }));

    console.log(this.props);
  }

  render() {
    let { user } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h2 onClick={this.handleClick}>Click to login (1s to show, mock.)</h2>
        {
          user ?
          <h3>{user.username}</h3> :
          null
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {user: state.user};
}

// wrapper set props to the Component
export default connect(mapStateToProps)(Home);