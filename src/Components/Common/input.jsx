import React, { Component } from "react";

const Input = ({ name, label, value, onChange, error, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        id={name}
        type={type}
        className="form-control"
        onChange={onChange}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
