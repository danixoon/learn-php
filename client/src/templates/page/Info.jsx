import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";
import { removePopup } from "../../store/actions";

import "./Info.scss";
import { X } from "react-feather";

const Popup = props => {
  const { id, text, timeout, onClose } = props;
  const [style, setSpring] = useSpring(() => ({ width: "100%", config: { duration: timeout } }));

  let timer = null;

  useEffect(() => {
    setSpring({ width: "0%" });
    timer = setTimeout(() => onClose(id), timeout);
  }, []);
  return (
    <div className="popup">
      <div className="popup__content">
        <X
          className="popup__close"
          onClick={() => {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
            onClose(id);
          }}
        />
        <span className="popup__text">{text}</span>
      </div>

      <animated.div style={style} className="popup__timer" />
    </div>
  );
};

const Info = props => {
  const { popups, removePopup } = props;

  const handleOnClose = id => {
    removePopup(id);
  };
  return (
    <>
      <div className="info-popup">
        {popups.map((v, i) => (
          <Popup onClose={handleOnClose} key={v.id} {...v} />
        ))}
      </div>
    </>
  );
};

export default connect(store => ({ popups: store.info.popups }), { removePopup })(Info);
