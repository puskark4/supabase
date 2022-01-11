import React from "react";
import "./LongContent.scss";

function LongContent(props) {
  return <div className="LongContent content">{props.children}</div>;
}

export default LongContent;
