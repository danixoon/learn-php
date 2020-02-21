import { connect } from "react-redux";
import React, { useState } from "react";

import "./List.scss";

const List = props => {
  const { children, className, horizontal, ...rest } = props;
  return (
    <ul {...rest} className={"list " + (horizontal ? "list_horizontal" : "")}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, ...rest }) => (
  <li {...rest} className="list__item">
    {children}
  </li>
);

export default List;

// export default connect(store => ({ username: store.username }))(Button);
