import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

import "./Account.scss";

const Account = props => {
  const { username } = props;
  return <> аккаунт пользователя {username}  </>;
};

export default connect(store => ({ username: store.user.username }))(Account);
