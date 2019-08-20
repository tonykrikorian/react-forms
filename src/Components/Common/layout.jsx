import React, { Component } from "react";
import LoginForm from "../LoginForm/loginForm";
import RegistrationForm from "../RegistrationForm/registrationForm";

const Layout = () => {
  return (
    <main role="main" className="container">
      <RegistrationForm />
    </main>
  );
};

export default Layout;
