import "./App.css";
import React from "react";

export default function Summary(props) {
  return (
    <div className="box">
      <div className="title">{props.title}</div>
      <p className="font">{props.description}</p>
    </div>
  );
}
