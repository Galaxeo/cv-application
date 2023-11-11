import { useState, useId } from "react";
import { InputComponent, DisplayComponent } from "./components/Io";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Edit from "./components/Edit.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [fullName, setFullName] = useState("Justin Cheok");
  const [location, setLocation] = useState("Brooklyn, NY");
  const [contact, setContact] = useState("example@email.com");
  const [link, setLink] = useState("cheok.works");
  const [schoolName, setSchool] = useState("New York University");
  const [major, setMajor] = useState("Computer Science");
  const [coursework, setCoursework] = useState(
    "Data Structures and Algorithms"
  );
  const changeName = (e) => {
    setFullName(e.target.value);
  };
  const changeContact = (e) => {
    setContact(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeLink = (e) => {
    setLink(e.target.value);
  };
  const changeSchool = (e) => {
    setSchool(e.target.value);
  };
  const changeMajor = (e) => {
    setMajor(e.target.value);
  };
  const changeCoursework = (e) => {
    setCoursework(e.target.value);
  };
  return (
    <>
      <div className="layout">
        <div className="form">
          <h2>Resume Maker</h2>
          <Contact
            fullName={fullName}
            changeName={changeName}
            contact={contact}
            changeContact={changeContact}
            location={location}
            changeLocation={changeLocation}
            link={link}
            changeLink={changeLink}
          ></Contact>
          <div className="educationForm">
            <h3>Education</h3>
            <InputComponent
              inputValue={schoolName}
              onInputChange={changeSchool}
              label="School Name"
              id=""
            ></InputComponent>
            <InputComponent
              inputValue={major}
              onInputChange={changeMajor}
              label="Major"
              id=""
            ></InputComponent>
            <InputComponent
              inputValue={coursework}
              onInputChange={changeCoursework}
              label="Coursework"
              id=""
            ></InputComponent>
          </div>
        </div>
        <div className="preview">
          <div className="header">
            <DisplayComponent
              type="Name"
              inputValue={fullName}
            ></DisplayComponent>
            <DisplayComponent
              type="Contact"
              inputValue={contact}
            ></DisplayComponent>
            <DisplayComponent
              type="Location"
              inputValue={location}
            ></DisplayComponent>
            <DisplayComponent type="Link" inputValue={link}></DisplayComponent>
          </div>
          <DisplayComponent
            type="School"
            inputValue={schoolName}
          ></DisplayComponent>
          <DisplayComponent type="Major" inputValue={major}></DisplayComponent>
          <DisplayComponent
            type="Relevant Coursework"
            inputValue={coursework}
          ></DisplayComponent>
        </div>
      </div>
    </>
  );
}

export default App;
