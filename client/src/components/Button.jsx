import { connect } from "react-redux";
import React, { useState } from "react";

const Button = props => {
  const { username } = props;
  const [count, onClick] = useState(0);
  return (
    <button onClick={() => onClick(count + 1)}>
      clicks: {count}; nice, {username}
    </button>
  );
};

export default connect(store => ({ username: store.username }))(Button);
