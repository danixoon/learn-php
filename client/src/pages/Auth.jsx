import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";
import Form from "../components/Form";
import Button from "../components/Button";

import "./Auth.scss";

const Auth = props => {
  const [input, bind] = useInput();
  const handleSubmit = () => {
    console.log("you submitted: ", input);
    axios
      .get("/api/auth.php", { params: { ...input, token: "1488" } })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input {...bind} placeholder="username" type="username" name="username" />
        <input {...bind} placeholder="password" type="password" name="password" />
        <Button type="submit">Войти</Button>
      </Form>
    </>
  );
};

export default connect(store => ({ username: store.user.username }))(Auth);
