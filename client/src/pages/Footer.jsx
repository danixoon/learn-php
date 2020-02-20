import { connect } from "react-redux";
import React, { useState } from "react";

const Footer = props => {
  const { username } = props;
  return <>bye, {username}</>;
};

export default connect(store => ({ username: store.user.username }))(Footer);
