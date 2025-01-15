import { useEffect, useRef, useState } from "react";
import "./Form.css";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";
import Input from "../Input/Input";

const Form = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(emailRef.current);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleValidatePassword();
    handleValidateEmail();
    console.log(formValues);
  };

  const handleValidateEmail = () => {
    if (!validateEmail(formValues.email)) {
      console.log("incorrect email");
      emailRef.current.focus();
    }
  };

  const handleValidatePassword = () => {
    if (!validatePassword(formValues.password)) {
      console.log("wrong password");
      passwordRef.current.focus();
    }
  };
  return (
    <>
      <div>
        New Form
        <form onSubmit={handleFormSubmit}>
          <div className="wrapper email-input-wrapper">
            <input
              type="text"
              value={formValues.email}
              ref={emailRef}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </div>
          <div className="wrapper password-input-wrapper">
            <input
              type="password"
              value={formValues.password}
              ref={passwordRef}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
            />
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
