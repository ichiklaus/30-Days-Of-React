import React from "react";

let SubscribeButton = (ActionProps) => {
  return (
    <button className="button button--submit" type="button">
      {ActionProps.text}
    </button>
  );
};

export default SubscribeButton;
