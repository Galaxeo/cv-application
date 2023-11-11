import { useState, useId } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DynamicComponent from "./DynamicComponent";
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
        <Input
          clas="fullName"
          content="Full Name"
          func={props.nameFunc}
        ></Input>
        <Input
          clas="location"
          content="Location"
          func={props.contactFunc}
        ></Input>
        {/* <Input clas="phoneNum" content="Phone Number"></Input>
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
function Preview({ name, contact }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{contact}</p>
      </div>
    </>
  );
}

function App() {
  const [fullName, setFullName] = useState("Justin Cheok");
  const [contact, setContact] = useState("example@email.com");
  const changeName = (name) => {
    setFullName(name);
  };
  const changeContact = (contact) => {
    setContact(contact);
  };
  return (
    <>
      <div className="layout">
        <div className="form">
          <ContactForm
            nameFunc={changeName}
            contactFunc={changeContact}
          ></ContactForm>
          <EducationForm></EducationForm>
          <DynamicComponent></DynamicComponent>
        </div>
        <div className="preview">
          <Preview name={fullName} contact={contact}></Preview>
        </div>
      </div>
    </>
  );
}

export default App;
