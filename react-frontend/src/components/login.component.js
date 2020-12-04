import React, { Component } from "react";
import AuthDataService from "../services/auth.service";
import Cookies from 'universal-cookie';
import { withRouter } from "react-router-dom";
const cookies = new Cookies();


class Login extends Component {
  constructor(props) {
    super(props);
    this.username = ""
    this.password = ""
    this.state = {
      currentUser: {
        username: "",
        email: "",
        password: "",
        isAdmin: true,
        imagePath: ""
      },
      message: ""
    };
  }

connect () {
  console.log(this.username)
  console.log(this.password)
  cookies.set("id", "")
  cookies.set("password", "")
AuthDataService.login(this.username, this.password).then((response) => { 
  cookies.set("id", response.data.id)
  cookies.set("password", response.data.password)
  this.props.history.push("books")
})
.catch((err) => {
  console.log("Authentication failed, please inform the correct credentials")
  console.log(cookies.get('id'))
  console.log(cookies.get('password'))
});


}

handleUsernameChange (event) {
  this.username = event.target.value 
}

handlePasswordChange (event) {
 this.password = event.target.value
}
  render() {
    const { currentUser } = this.state;

    return (
      <div className="d-flex justify-content-around">
        {currentUser ? (
          <div className = "card">
            
            <form className="text-center border border-light p-3">
            <p className="h4 mb-4">Sign in</p>
              <div className="text-center border border-light p-3">
                <label htmlFor="email"> User Email</label>
                <input
                  type="email"
                  className="defaultLoginFormEmail"
                  id="email"
                  value={this.state.username}
                  onChange={this.handleUsernameChange.bind(this)} 
                />
              </div>

              <div className="text-center border border-light p-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="defaultLoginFormPassword"
                  id="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange.bind(this)} 
                />
              </div>
              
            </form>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.connect.bind(this)}
            >
              Login
            </button>
          </div>
        ) :"" }
      </div>
    );
  }
}

export default withRouter(Login)