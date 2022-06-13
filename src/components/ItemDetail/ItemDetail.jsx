import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ detalleProducto }) {
  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
  };

  const { id, title, price, pictureUrl, descripcion, stock } = detalleProducto;

  return (
    <>
      <div className="detalle">
        <h1>{title}</h1>
        <span>
          <img src={pictureUrl} alt={title} />
        </span>
      </div>
      <div className="desc">
        <p className="textoDes">{descripcion}</p>
        <p className="precio">{`$UY ${price}`}</p>
        <p>{`Stock disponible: ${stock} unidades`}</p>
        <ItemCount className="onAdd" stock={15} initial={1} onAdd={onAdd} />
      </div>
    </>
  );
}
