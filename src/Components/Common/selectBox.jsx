import React, { Component } from "react";

const SelectBox = ({
  name,
  label,
  placeholder,
  dataSource,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        className="form-control"
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {dataSource.map(item => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectBox;
