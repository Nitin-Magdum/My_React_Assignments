import React from "react";
import "./App.css";
export default function Experiance(props) {
  return (
    <div className="box">
      <div className="title">{props.title}</div>
      <p className="font">{props.description}</p>
    </div>
  );
}
