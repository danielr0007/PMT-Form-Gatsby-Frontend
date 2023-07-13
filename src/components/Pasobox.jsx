import React from "react";
import { FaCircleNotch } from "react-icons/fa";

function Pasobox(props) {
  return (
    <div className="box">
      <h4>{props.paso}</h4>
      <div className="circles">
        <FaCircleNotch />
        <FaCircleNotch />
        <FaCircleNotch />
      </div>
      <p>{props.info}</p>
    </div>
  );
}

export default Pasobox;
