import React, { Component } from "react";
import Input from "../Common/input";
import SelectBox from "../Common/selectBox";
import Joi from "joi-browser";
import Form from "../Common/form";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      perfil: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    perfil: Joi.string()
      .required()
      .label("Perfil")
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelectInput("perfil", "Perfil")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
