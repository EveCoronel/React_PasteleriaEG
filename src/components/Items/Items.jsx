import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Items.css";

export default function Items({ producto }) {
  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
  };
  const { id, title, price, pictureUrl } = producto;

  return (
    <>
      <div className="card">
        <h1>{title}</h1>
        <span>
          {" "}
          <img className="img" src={pictureUrl} alt={title} />
        </span>
        <p>{`$UY ${price}`}</p>
        <ItemCount stock={15} initial={1} onAdd={onAdd} />
      </div>
    </>
  );
}
