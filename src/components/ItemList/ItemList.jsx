import React from "react";
import Items from "../Items/Items";

export default function ItemList({ productos }) {
  return (
    <>
      {productos?.map((producto) => (
        <Items key={producto.id} producto={producto} />
      ))}
    </>
  );
}
