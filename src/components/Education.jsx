import Edit from "./Edit";
import { InputComponent, DisplayComponent } from "./Io";
import { useState } from "react";

function Education({
  school,
  changeSchool,
  major,
  changeMajor,
  grad,
  changeGrad,
  coursework,
  changeCoursework,
}) {
  const [display, setDisplay] = useState(true);
  function changeDisplay() {
    setDisplay(!display);
  }
  if (display) {
    return (
      <div>
        <h3>
          Education<Edit status={display} func={changeDisplay}></Edit>
        </h3>
        <InputComponent
          inputValue={school}
          onInputChange={changeSchool}
          label="School"
          id="school"
        ></InputComponent>
        <InputComponent
          inputValue={major}
          onInputChange={changeMajor}
          label="Major"
          id="major"
        ></InputComponent>
        <InputComponent
          inputValue={grad}
          onInputChange={changeGrad}
          label="Graduation Date"
          id="major"
        ></InputComponent>
        <InputComponent
          inputValue={coursework}
          onInputChange={changeCoursework}
          label="coursework"
          id="coursework"
        ></InputComponent>
      </div>
    );
  } else {
    return (
      <h3>
        Education<Edit status={display} func={changeDisplay}></Edit>
      </h3>
    );
  }
}
export default Education;
