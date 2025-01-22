import { useContext, useRef } from "react";
import Input from "../Input/Input";
import "./Form.css";
import { FormContext } from "../../Providers/FormContext";
import validateEmail from "../../helper/emailValidator";
import validatePassword from "../../helper/passwordValidator";

const Form = () => {
  const { formInput } = useContext(FormContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // we have access to formInput value, so validation can occurs here.
    handleInvalidEmail();
    handleInvalidPassword();
  };

  const handleInvalidEmail = () => {
    if (!validateEmail(formInput.email)) {
      emailRef.current.setInvalid();
      emailRef.current.shaking();
    }
  };

  const handleInvalidPassword = () => {
    if (!validatePassword(formInput.password)) {
      passwordRef.current.setInvalid();
      passwordRef.current.shaking();
    }
  };

  return (
    <>
      <div>
        New Form
        {/*  
        ==> noValidate : -> it will turned off the default browser validation.
        which means it will not vaidate the email field, which is validated by browser itself
        */}
        <form onSubmit={handleFormSubmit} noValidate>
          <div className="wrapper email-input-wrapper">
            <Input
              id="email-input"
              type="email"
              label="email"
              ref={emailRef}
              checkOnBlur={handleInvalidEmail}
            />
          </div>
          <div className="wrapper password-input-wrapper">
            <Input
              id="password-input"
              type="password"
              label="password"
              ref={passwordRef}
              checkOnBlur={handleInvalidPassword}
            />
          </div>

          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default Form;

/**
 * * There are three available ways to validate/submit form :-
 *  1. Full fledged third party library (most preferred ways)
 *    eg : react hook form
 *
 *  2. Controlled components :-
 *    most time pepole use controlled components architecture to validate the form.
 *    -> It involves manual state management which can cause irrelevant re-renders.
 *    -> When using a controlled component you write an event handler for everyway
 *        your data can change.
 *        eg : Onchange, OnClick
 *    -> Control components also requires you to maintain all the validation logic.
 *
 * * result :-
 *  controlled components are those components which manages their own state.
 *
 *  3. Uncontrolled components :-
 *   -> formdata is managed by DOM itself.
 *   -> these components are not controlled by react state.
 *   -> the values of the form elements are traditionally controlled by and stored on the DOM.
 *
 *  * result :-
 *  uncontrolled components are those components which don't manages their own state.
 *  Inorder to fetch the values they depend on the DOM.
 *
 *
 *
 *
 * ==============================================================================================
 *  * we can't use ref as a prop in user defined component, beacuse ref is a keyword which is used by react.
 *  * If we want to use ref as a prop in a custom component, wrap that custom component in react.forwardRef().
 *
 */
