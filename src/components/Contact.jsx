import Edit from "./Edit";
import { InputComponent } from "./Io";
import { useState } from "react";

function Contact({
  fullName,
  changeName,
  contact,
  changeContact,
  location,
  changeLocation,
  link,
  changeLink,
}) {
  const [display, setDisplay] = useState(true);
  function changeDisplay() {
    setDisplay(!display);
  }
  if (display) {
    return (
      <div>
        <h3>
          Contact Information<Edit status={display} func={changeDisplay}></Edit>
        </h3>
        <InputComponent
          inputValue={fullName}
          onInputChange={changeName}
          label="Name"
          id="name"
        ></InputComponent>
        <InputComponent
          inputValue={contact}
          onInputChange={changeContact}
          label="Contact"
          id="contact"
        ></InputComponent>
        <InputComponent
          inputValue={location}
          onInputChange={changeLocation}
          label="Location"
          id="location"
        ></InputComponent>
        <InputComponent
          inputValue={link}
          onInputChange={changeLink}
          label="Link"
          id="link"
        ></InputComponent>
      </div>
    );
  } else {
    return (
      <>
        <h3>
          Contact Information<Edit status={display} func={changeDisplay}></Edit>
        </h3>
      </>
    );
  }
}
export default Contact;
