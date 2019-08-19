import React, { Component } from "react";
import Input from "../Common/input";
import SelectBox from "../Common/selectBox";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
      perfil: ""
    },
    errors: {}
  };

  validate = () => {
    const { account } = this.state;
    const errors = {};

    if (account.username.trim() === "")
      errors.username = "username is required";

    if (account.password.trim() === "")
      errors.password = "password is required";

    if (account.perfil.trim() === "") errors.perfil = "perfil is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  validateProperty = ({ name, value }) => {
    if (name == "username") {
      if (value.trim() === "") return "username is required";
    }

    if (name == "password") {
      if (value.trim() === "") return "password is required";
    }

    if (name == "perfil") {
      if (value.trim() === "") return "perfil is required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const { account } = { ...this.state };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            label="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <SelectBox
            name="perfil"
            label="Perfil"
            placeholder="Seleccione el perfil"
            dataSource={[
              { id: 1, name: "User" },
              { id: 2, name: "Administrator" }
            ]}
            onChange={this.handleChange}
            error={errors.perfil}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
