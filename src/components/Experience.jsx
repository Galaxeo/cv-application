import Edit from "./Edit";
import { InputComponent } from "./Io";
import { useState } from "react";
function Experience({ title, company, date, description, index, changeData }) {
  const [display, setDisplay] = useState(true);
  function changeDisplay() {
    setDisplay(!display);
  }
  function printId() {
    console.log(index);
  }
  if (display) {
    return (
      <>
        <h3>
          Experience<Edit status={display} func={changeDisplay}></Edit>
        </h3>
        <InputComponent
          inputValue={title}
          onInputChange={(e) => changeData(index, e.target.value)}
        ></InputComponent>
      </>
    );
  } else {
    return (
      <>
        <h3>
          Experience<Edit status={display} func={changeDisplay}></Edit>
        </h3>
      </>
    );
  }
}
export default Experience;
