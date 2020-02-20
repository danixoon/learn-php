import { connect } from "react-redux";
import React, { useState } from "react";

import "./Button.scss";

const Button = props => {
  const { children, ...rest } = props;
  // const [count, onClick] = useState(0);
  return (
    <button {...rest} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;

// export default connect(store => ({ username: store.username }))(Button);
