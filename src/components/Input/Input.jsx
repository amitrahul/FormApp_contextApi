import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
  useState,
} from "react";
import { FormContext } from "../../Providers/FormContext";
import "./Input.css";
function Input({ type, id, label, checkOnBlur }, ref) {
  const { formInput, setFormInput } = useContext(FormContext);
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [shake, setShake] = useState(false);
  // introduce a local ref, which is local to component.
  const localRef = useRef(null);

  useEffect(() => {
    setIsValid(true);
    setShake(false);
  }, [text]);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => localRef.current.focus(),
        setInvalid: () => setIsValid(false),
        shaking: () => setShake(true),
      };
    },
    []
  );

  return (
    <>
      <input
        className={`${(!isValid && "error-input") || ""} ${shake && "shake"}`}
        ref={localRef}
        type={type}
        id={id}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setFormInput({ ...formInput, [label]: e.target.value });
        }}
        onBlur={checkOnBlur}
      />
      <br />
      <span style={{ color: "grey" }}>{!isValid && `${label} is invalid`}</span>
    </>
  );
}

export default React.forwardRef(Input);
