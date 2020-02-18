import { connect } from "react-redux";
import React, { useState } from "react";

const Form = props => {
  const { children, onSubmit, ...rest } = props;
  return (
    <form
      {...rest}
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
