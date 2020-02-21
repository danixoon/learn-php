import { connect } from "react-redux";
import React, { useState } from "react";

import { addPopup } from "../../store/actions";

import "./Header.scss";
import Link from "../../components/Link";
import List, { ListItem } from "../../components/List";

const Header = props => {
  const { username, addPopup } = props;
  return (
    <>
      <List horizontal={true}>
        <ListItem>
          <Link href="/main">Главная</Link>
        </ListItem>
        <ListItem style={{ float: "right" }}>
          <Link
            onClick={() => {
              addPopup("Привет!", 3000);
            }}
          >
            Привет, {username}
          </Link>
        </ListItem>
      </List>
    </>
  );
};

export default connect(store => ({ username: store.user.username }), { addPopup })(Header);
