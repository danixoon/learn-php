import { connect } from "react-redux";
import React, { useState } from "react";

import "./Link.scss";

const Link = props => {
  const { children, className, ...rest } = props;
  return (
    <a href="#" className="link" {...rest}>
      {children}
    </a>
  );
};

export default Link;

// export default connect(store => ({ username: store.username }))(Button);
