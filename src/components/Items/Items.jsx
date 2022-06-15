import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Items.css";

export default function Items({ producto }) {
  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
  };
  const { id, title, price, pictureUrl, stock } = producto;

  return (
    <>
      <div className="card">
        <h1 className='h1'>{title}</h1>
        <span>
          <img className="img" src={pictureUrl} alt={title} />
        </span>
        <p>{`$UY ${price}`}</p>
        <button className="btn1">{
        <Link to={`/items/${id}`}>Detalles</Link>
        }</button>
        {/*  <ItemCount stock={stock} initial={1} onAdd={onAdd} /> */}
        <p>{`Stock disponible: ${stock}`}</p>
      </div>
    </>
  );
}
