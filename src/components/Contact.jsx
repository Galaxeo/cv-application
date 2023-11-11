import Edit from "./Edit";
const InputComponent = ({ inputValue, onInputChange, label, id }) => {
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input type="text" id={id} value={inputValue} onChange={onInputChange} />
    </div>
  );
};

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
  return (
    <div>
      <h3>
        Contact Information<Edit status={0}></Edit>
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
}
export default Contact;
