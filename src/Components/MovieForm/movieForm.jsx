import React, { Component } from "react";
import Form from "../Common/form";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    numberInStock: Joi.number()
      .min(1)
      .max(100)
      .required(),
    rate: Joi.number()
      .min(1)
      .max(10)
      .required()
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelectInput("genre", "Genre", [
            { id: 1, name: "Comedy" },
            { id: 2, name: "Drama" },
            { id: 3, name: "Action" }
          ])}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
