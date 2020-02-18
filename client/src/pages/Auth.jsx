import { connect } from "react-redux";
import React, { useState } from "react";
import useInput from "../hooks/useInput";
import Form from "../components/Form";

const Auth = props => {
  const [input, bind] = useInput();
  const handleSubmit = () => {
    console.log("you submitted: ", input);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <input
          {...bind}
          placeholder="username"
          type="username"
          name="username"
        />
        <input
          {...bind}
          placeholder="password"
          type="password"
          name="password"
        />
        <button type="submit"> Войти </button>
      </Form>
    </>
  );
};

export default connect(store => ({ username: store.username }))(Auth);
