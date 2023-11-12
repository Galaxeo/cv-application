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

// TODO:
// need a button that can generate a component and a display component when clicked

// have the button, now need to create the function that generates those components. This function will likely be a part of the app.jsx, as we need to generate these components in the parent component

// in order to generate components, we can use a state variable that contains a list of the components that we want to generate, which gets passed into a .map function to generate all the components we want. then, we have the add component function, that creates the new component and then calls the setter function. in order to ensure that we don't overlap keys, we can ensure that the key being used for that component is generated with the name of that component in mind (e.g. key={categoryName} or something)

// now to remove these components, we can filter that component by looking for the key out of the list of components that we want to generate so that we can re-render the DOM.

// within a experience component, we want to have the title, company, date, and description

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
  const changeSkills = (e) => {
    setSkills(e.target.value);
  };
  // Also stores the array of data?
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
          ></Contact>
          <Education
            school={schoolName}
            changeSchool={changeSchool}
            major={major}
            changeMajor={changeMajor}
            coursework={coursework}
            changeCoursework={changeCoursework}
          ></Education>
          <Skills skills={skills} changeSkills={changeSkills}></Skills>
          {/* Goal right now is to be able to store the data of each experience in an array*/}
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
                changeData={changeExperience}
              ></Experience>
            );
          })}
          <button onClick={addExperience}>Add</button>
          <button onClick={removeExperience}>Remove</button>
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
