import { connect } from "react-redux";
import React, { useState } from "react";

const Header = props => {
  const { username } = props;
  return <>hi, {username}</>;
};

export default connect(store => ({ username: store.username }))(Header);
