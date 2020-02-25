import { connect } from "react-redux";
import React, { useState } from "react";
import axios from "axios";
import useInput from "../../hooks/useInput";
import Form from "../../components/Form";
import Button from "../../components/Button";

import "./Auth.scss";
import Input from "../../components/Input";

const AuthView = props => {
  const [input, bind] = useInput();
  const handleSubmit = () => {
    console.log("you submitted: ", input);
    axios
      .get("/api/auth", { params: { ...input, token: "1488" } })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input {...bind} label="Имя пользователя" placeholder="username" type="username" name="username" autoComplete="off" />
        <Input {...bind} label="Пароль" placeholder="password" type="password" name="password" />
        {/* <input className="input" {...bind} placeholder="username" type="username" name="username" autoComplete="off" /> */}
        {/* <input {...bind} placeholder="password" type="password" name="password" /> */}
        <Button type="submit">Войти</Button>
      </Form>
    </>
  );
};

export default connect(store => ({ username: store.user.username }))(AuthView);
