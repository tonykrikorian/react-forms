import React, { Component } from "react";
import LoginForm from "../LoginForm/loginForm";
import RegistrationForm from "../RegistrationForm/registrationForm";
import MovieForm from "./../MovieForm/movieForm";

const Layout = () => {
  return (
    <main role="main" className="container">
      <MovieForm />
    </main>
  );
};

export default Layout;
