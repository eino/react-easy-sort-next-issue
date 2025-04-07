"use client";

import { arrayMoveImmutable } from "array-move";
import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";

export default function App() {
  const [items, setItems] = React.useState([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
  ]);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMoveImmutable(array, oldIndex, newIndex));
  };

  return (
    <SortableList
      className="list"
      draggedItemClassName="dragged"
      onSortEnd={onSortEnd}
    >
      {items.map((item) => (
        <SortableItem key={item}>
          <div className="item">{item}</div>
        </SortableItem>
      ))}
    </SortableList>
  );
}
