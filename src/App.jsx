import { useState, useId } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function Input({ clas, content, func }) {
  const id = useId();
  return (
    <div className="inputCont">
      <label htmlFor={id}>{content}</label>
      <input
        type="text"
        className="clas"
        id={id}
        onChange={(e) => {
          func(e.target.value);
        }}
      />
    </div>
  );
}

function ContactForm(props) {
  return (
    <>
      <div className="formCont">
        <h2>Contact</h2>
        <Input clas="fullName" content="Full Name" func={props.func}></Input>
        {/* <Input clas="location" content="Location"></Input>
        <Input clas="phoneNum" content="Phone Number"></Input>
        <Input clas="email" content="Email Address"></Input>
        <Input
          clas="link"
          content="Miscellaneous Link (e.g. portfolio)"
        ></Input> */}
      </div>
    </>
  );
}
function EducationForm() {
  return (
    <>
      <div className="formCont">
        <h2>Education</h2>
        {/* <Input clas="school" content="School Name"></Input>
        <Input clas="major" content="Major(s)"></Input>
        <Input clas="coursework" content="Relevant Coursework"></Input> */}
      </div>
    </>
  );
}
function Preview({ name }) {
  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
}

function App() {
  const [fullName, setFullName] = useState("Justin Cheok");
  const changeName = (name) => {
    setFullName(name);
  };
  return (
    <>
      <div className="layout">
        <div className="form">
          <ContactForm func={changeName}></ContactForm>
          <EducationForm></EducationForm>
        </div>
        <div className="preview">
          <Preview name={fullName}></Preview>
        </div>
      </div>
    </>
  );
}

export default App;
