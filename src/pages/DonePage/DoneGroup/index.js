import DoneItem from "../DoneItem";
import {useSelector} from "react-redux";
import React from "react";

export default function DoneGroup() {
  const doneList = useSelector((state) => state.todos).filter(todo => todo.done)
  return (
    <div>
      {doneList.map((doneItem) => {
        return <DoneItem key={doneItem.id} doneItem={doneItem} />;
      })}
    </div>
  );
}
