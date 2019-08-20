import React, { Component } from "react";
import Form from "../Common/form";
import Joi from "joi-browser";

class RegistrationForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
      perfil: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .required(),
    name: Joi.string().required(),
    perfil: Joi.string().required()
  };
  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderSelectInput("perfil", "Perfil")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
