import { useState, useId } from "react";
import { InputComponent, DisplayComponent } from "./components/Io";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Edit from "./components/Edit.jsx";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education";
import Category from "./components/Category";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { v4 as uuidv4 } from "uuid";

// TODO: Now to format and display the text itself

function App() {
  const [fullName, setFullName] = useState("Justin Cheok");
  const [location, setLocation] = useState("Brooklyn, NY");
  const [phoneNum, setPhoneNum] = useState("111-111-1111");
  const [contact, setContact] = useState("example@email.com");
  const [link, setLink] = useState("cheok.works");
  const [schoolName, setSchool] = useState("New York University");
  const [major, setMajor] = useState("Computer Science");
  const [grad, setGrad] = useState("Fall 2023");
  const [coursework, setCoursework] = useState(
    "Data Structures and Algorithms"
  );
  const [skills, setSkills] = useState("Programming");
  const [experience, setExperience] = useState([]);
  const changeName = (e) => {
    setFullName(e.target.value);
  };
  const changeContact = (e) => {
    setContact(e.target.value);
  };
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changePhoneNum = (e) => {
    setPhoneNum(e.target.value);
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
  const changeGrad = (e) => {
    setGrad(e.target.value);
  };
  const changeSkills = (e) => {
    setSkills(e.target.value);
  };
  const addExperience = (e) => {
    if (experience.length == 4) {
      alert("Max 4 experiences!");
      return null;
    }
    let newArr = [...experience, {}];
    console.log(newArr);
    setExperience(newArr);
  };
  const removeExperience = (e) => {
    let removed = [...experience];
    removed.pop();
    console.log(removed);
    setExperience(removed);
  };
  const changeExperience = (ind, property, data) => {
    let adjusted = [...experience];
    for (let i = 0; i < adjusted.length; i++) {
      if (i == ind) {
        adjusted[i][property] = data;
      }
    }
    setExperience(adjusted);
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
            phoneNum={phoneNum}
            changePhoneNum={changePhoneNum}
          ></Contact>
          <Education
            school={schoolName}
            changeSchool={changeSchool}
            major={major}
            changeMajor={changeMajor}
            grad={grad}
            changeGrad={changeGrad}
            coursework={coursework}
            changeCoursework={changeCoursework}
          ></Education>
          <Skills skills={skills} changeSkills={changeSkills}></Skills>
          <h3>Experiences: </h3>
          {experience.map((exp, index) => {
            console.log(experience[index]);
            return (
              <Experience
                key={index}
                index={index}
                title={experience[index].Title}
                company={experience[index].Company}
                date={experience[index].Date}
                description={experience[index].Description}
                location={experience[index].Location}
                changeData={changeExperience}
              ></Experience>
            );
          })}
          <button onClick={addExperience}>Add</button>
          <button onClick={removeExperience}>Remove</button>
        </div>
        <div className="preview">
          <div className="paper">
            <div className="header">
              <DisplayComponent
                type="Name"
                inputValue={fullName}
              ></DisplayComponent>
              {/* RIGHT HERE, style contact info  */}
              <div className="contactInfo">
                <DisplayComponent
                  type="Contact"
                  inputValue={contact}
                ></DisplayComponent>
                <DisplayComponent
                  type="Phone"
                  inputValue={phoneNum}
                ></DisplayComponent>
                <DisplayComponent
                  type="Location"
                  inputValue={location}
                ></DisplayComponent>
                <DisplayComponent
                  type="Link"
                  inputValue={link}
                ></DisplayComponent>
              </div>
            </div>
            <strong>Education: </strong>
            <DisplayComponent
              type="School"
              inputValue={schoolName}
            ></DisplayComponent>
            <DisplayComponent
              type="Major"
              inputValue={major}
            ></DisplayComponent>
            <DisplayComponent
              type="Expected Graduation Date:"
              inputValue={"Graudation Date: " + grad}
            ></DisplayComponent>
            <strong></strong>
            <DisplayComponent
              type="Relevant Coursework"
              inputValue={"Relevant Coursework: " + coursework}
            ></DisplayComponent>
            <strong>Skills:</strong>
            <DisplayComponent
              type="Skills"
              inputValue={skills}
            ></DisplayComponent>
            <strong>Experience:</strong>
            {experience.map((exp, index) => {
              console.log(experience[index]);
              return (
                <div className="exp">
                  <strong>
                    <em className="row">
                      <DisplayComponent
                        type="Title"
                        inputValue={experience[index].Title + " at "}
                      ></DisplayComponent>
                      <DisplayComponent
                        type="Company"
                        inputValue={experience[index].Company}
                      ></DisplayComponent>
                    </em>
                  </strong>
                  <DisplayComponent
                    type="Company"
                    inputValue={experience[index].Location}
                  ></DisplayComponent>
                  <DisplayComponent
                    type="Date"
                    inputValue={experience[index].Date}
                  ></DisplayComponent>
                  <DisplayComponent
                    type="Description"
                    inputValue={experience[index].Description}
                  ></DisplayComponent>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
