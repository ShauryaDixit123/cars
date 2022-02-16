import React from "react";

class Password extends React.Component {
  state = { password: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form ">
          <div className="field">
            <label>Enter password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            {this.state.password.length < 4 ? "Password is too short" : ""}
          </div>
        </form>
      </div>
    );
  }
}
export default Password;
