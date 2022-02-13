import React from "react";
import "./ButtonShow.css";

function ButtonShow({ label, button }) {
  return (
    <div>
      <p className="label">{label}</p>
      <div className="button_container">{button}</div>
    </div>
  );
}

export default ButtonShow;
