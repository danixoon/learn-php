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

const Main = props => {
  const { addPopup } = props;
  return (
    <>
      <div className="main__pepe">
        <img className="img" src={pepe} />
      </div>
      <div className="main__text">
        <h1 style={{ textAlign: "center" }}> Здравствуй, друг! </h1>
        <p>
          Это страничка пепе, где ты сможешь отыскать множество{" "}
          <Link
            onClick={() => {
              addPopup("Ура! Ты нашёл одну из них!", 3000);
            }}
          >
            <strong> тайн~</strong>
          </Link>
        </p>
      </div>
    </>
  );
};

export default connect(store => ({ username: store.user.username }), { addPopup })(Main);
