import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

import "./Error.scss";

const ErrorView = props => {
  const { message, code } = props;
  return (
    <>
      <h1 className="error__label">
        Ошибка <span className="error__code">{code}</span>
      </h1>
      <p className="error__description">{message}</p>
    </>
  );
};

export default connect(store => ({ message: store.error.message, code: store.error.code }))(ErrorView);
