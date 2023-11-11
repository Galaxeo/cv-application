import React, { useState } from "react";

// Input component
const InputComponent = ({ inputValue, onInputChange, label, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={inputValue} onChange={onInputChange} />
    </div>
  );
};

// Display component
const DisplayComponent = ({ type, inputValue }) => {
  return (
    <div>
      <p>
        {type}: {inputValue}
      </p>
    </div>
  );
};

export { InputComponent, DisplayComponent };
