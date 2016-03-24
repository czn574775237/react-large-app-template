import React from 'react';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';
import { Link } from 'react-router';


class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    };

    this._handleClick = this._handleClick.bind(this);
    this._handleClickUserInfo = this._handleClickUserInfo.bind(this);
  }

  _handleClick(e) {
    this.setState({ current: e.key });

    this.props.dispatch(UserActions.userLogin({
      username: 'zhining'
    }));
  }

  _handleClickUserInfo() {
    this.props.dispatch(UserActions.getUserInfo());
  }

  render() {
    let { user } = this.props;
    return (
      <div>
        <h1 style={styles.h1}>HomeView</h1>
        <h2 onClick={this._handleClick}>Click to login (1s to show, mock.)</h2>
        {
          user ?
          <h3>{user.username}</h3> :
          null
        }
        <h3 onClick={this._handleClickUserInfo}>Get user info event.</h3>
        <p><Link to={'/user'}>User</Link></p>
        <p><Link to={'/user'}>Form</Link></p>
      </div>
    );
  }
}

const styles = {
  h1: {
    color: '#08c',
    padding: '2em',
    border: '1px solid #ccc'
  }
}

function mapStateToProps(state) {
  return {user: state.user};
}

// wrapper set props to the Component
export default connect(mapStateToProps)(HomeView);
