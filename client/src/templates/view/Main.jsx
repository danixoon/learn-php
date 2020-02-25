import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";
import Button from "../../components/Button";

import Input from "../../components/Input";
import pepe from "../../img/pepe.jpg";
import "./Main.scss";
import Link from "../../components/Link";
import { addPopup } from "../../store/actions";

const MainView = props => {
  const { addPopup } = props;
  return (
    <>
      
    </>
  );
};

export default connect(store => ({ username: store.user.username }), { addPopup })(MainView);
