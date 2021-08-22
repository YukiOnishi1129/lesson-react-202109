import React from "react";
/* styles */
import "./Input.css";

const InputFunc = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input className="input" type="text" value={value} onChange={onChange} />
  );
};

export default InputFunc;
