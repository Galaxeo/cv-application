import { useState } from "react";
import Edit from "./Edit";
import { InputComponent, DisplayComponent } from "./Io";
function Skills({ skills, changeSkills }) {
  const [display, setDisplay] = useState(true);
  function changeDisplay() {
    setDisplay(!display);
  }
  if (display) {
    return (
      <>
        <h3>
          Skills<Edit status={display} func={changeDisplay}></Edit>
        </h3>
        <InputComponent
          inputValue={skills}
          onInputChange={changeSkills}
          id="skills"
        ></InputComponent>
      </>
    );
  } else {
    return (
      <h3>
        Skills <Edit status={display} func={changeDisplay}></Edit>
      </h3>
    );
  }
}

export default Skills;
