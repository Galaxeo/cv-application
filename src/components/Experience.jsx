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
    console.log(title);
    return (
      <>
        <h4>
          Experience {index + 1}{" "}
          <Edit status={display} func={changeDisplay}></Edit>
        </h4>
        <InputComponent
          inputValue={title}
          onInputChange={(e) => changeData(index, "Title", e.target.value)}
          label="Title"
          id="expTitle"
        ></InputComponent>
        <InputComponent
          inputValue={company}
          onInputChange={(e) => changeData(index, "Company", e.target.value)}
          label="Company"
          id="expCompany"
        ></InputComponent>
        <InputComponent
          inputValue={date}
          onInputChange={(e) => changeData(index, "Date", e.target.value)}
          label="Date"
          id="expDate"
        ></InputComponent>
        <InputComponent
          inputValue={description}
          onInputChange={(e) =>
            changeData(index, "Description", e.target.value)
          }
          label="Description"
          id="expDescription"
          type="textarea"
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
