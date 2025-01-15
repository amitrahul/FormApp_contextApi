import { useState } from "react";
import Form from "./components/Form/Form";
import { FormContext } from "./Providers/FormContext";
function App() {
  const [formInput, setFormInput] = useState({});
  return (
    <>
      <FormContext.Provider value={{ formInput, setFormInput }}>
        <Form />
      </FormContext.Provider>
    </>
  );
}

export default App;
