import Edit from "./Edit";
import { InputComponent, DisplayComponent } from "./Io";

function Education({
  school,
  changeSchool,
  major,
  changeMajor,
  coursework,
  changeCoursework,
}) {
  return (
    <div>
      <h3>Education</h3>
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
        inputValue={coursework}
        onInputChange={changeCoursework}
        label="coursework"
        id="coursework"
      ></InputComponent>
    </div>
  );
}
export default Education;
