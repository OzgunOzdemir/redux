import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "./redux/actions/index";

class App extends Component {
  constructor(props) {
    super(props);
  }

  onChangeName = () => {
    this.props.onUpdateUser("Software", "Developer");
  };

  render() {
    return (
      <div className="container">
        <span>
          Merhaba {this.props.user.name} {this.props.user.surname}
        </span>
        <br />
        <button onClick={this.onChangeName}>Change Name</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
