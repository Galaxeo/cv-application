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
const DisplayComponent = ({ inputValue }) => {
  return (
    <div>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

// Parent component that dynamically generates the components
const DynamicComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Generate unique ids for the input components
  const input1Id = "input1";

  return (
    <div>
      <InputComponent
        inputValue={inputValue}
        onInputChange={handleInputChange}
        label="Input 1"
        id={input1Id}
      />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export default DynamicComponent;
