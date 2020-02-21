import React, { useState } from "react";
export default () => {
  const [input, setInput] = useState({});
  return [
    input,
    {
      onChange: e => {
        input[e.target.name] = e.target.value;
        setInput(input);
      }
    }
  ];
};
