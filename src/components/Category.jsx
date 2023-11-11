import Edit from "./Edit";
import { InputComponent } from "./Io";
import { useState } from "react";
function Category({ name, skills, changeSkills }) {
  return (
    <>
      <p>{name}</p>
      {/* <InputComponent
        inputValue={skills}
        onInputChange={changeSkills}
        label={skills}
        id=""
      ></InputComponent> */}
    </>
  );
}

export default Category;
