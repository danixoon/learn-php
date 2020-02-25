import { connect } from "react-redux";
import React, { useState } from "react";

import "./Form.scss";

const Form = props => {
  const { children, className, onSubmit, ...rest } = props;
  return (
    <form
      {...rest}
      className={"form " + (className || "")}
      onSubmit={e => {
        e.preventDefault();
        if (onSubmit) onSubmit(e);
      }}
    >
      {children}
    </form>
  );
};

export default Form;
// export default connect(store => ({ username: store.username }))(Form);
