import { connect } from "react-redux";
import React, { useState } from "react";

import "./Input.scss";

const Input = props => {
  const { label, className, ...rest } = props;
  return (
    <>
      {label ? <label className="input">{label}</label> : ""}
      <input className={"input " + (className || "")} {...rest} />
    </>
  );
};

export default Input;

// export default connect(store => ({ username: store.username }))(Button);
