import React, { useState } from "react";

// Input component
const InputComponent = ({
  inputValue,
  onInputChange,
  label,
  id,
  type = "",
}) => {
  if (type == "") {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    );
  } else if ((type = "textarea")) {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} value={inputValue} onChange={onInputChange} />
      </div>
    );
  }
};

// Display component
const DisplayComponent = ({ type, inputValue }) => {
  return (
    <div className={"display" + type}>
      <p>{inputValue}</p>
    </div>
  );
};

export { InputComponent, DisplayComponent };
