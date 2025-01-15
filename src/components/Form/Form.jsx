import { useContext } from "react";
import Input from "../Input/Input";
import "./Form.css";
import { FormContext } from "../../Providers/FormContext";

const Form = () => {
  const { formInput, setFormInput } = useContext(FormContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  return (
    <>
      <div>
        New Form
        <form onSubmit={handleFormSubmit}>
          <div className="wrapper email-input-wrapper">
            <Input id="email-input" type="text" label="email" />
          </div>
          <div className="wrapper password-input-wrapper">
            <Input id="password-input" type="password" label="password" />
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
