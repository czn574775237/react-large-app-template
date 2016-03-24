import React from 'react'
import validate from 'validate.js'

var constraints = {
  username: {
    presence: true,
    length: {minimum: 3, maximum: 20},
    email: true
  },
  password(value, attrs) {
    // console.log(attrs)
    if (!(/^(34|37).*$/).test(attrs.password)) return null;
    return {
      presence: {message: 'is required when using AMEX'},
      length: {is: 5}
    }
  }
}

// console.log(validate({ username: '', password: '123' }, constraints));
console.log(validate({username: 'zhining'}, constraints))


class FormView extends React.Component {

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label>username</label>
            <input value={this.state.username} onChange={(e) => {
              this.setState({ username: e.target.value })
            }}/>
          </div>
          <div>
            <label>password</label>
            <input value={this.state.password} onChange={(e) => {
              this.setState({ password: e.target.value })
            }}/>
          </div>
          <button>submit</button>
        </form>
      </div>
    )
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    var { username, password } = this.state
    var formData = {
      username,
      password
    }
    // Joi.validate(formData, schme, (error) => {
    //   if (error) {
    //     console.log(error)
    //   }
    // })

  }
}

export default FormView;
