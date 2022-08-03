import "./index.css";
import React from "react";


export default function DoneItem(props) {
  const { doneItem } = props;

  return (
    <div className="DoneItem">
        {doneItem.text}
    </div>
  );
}
