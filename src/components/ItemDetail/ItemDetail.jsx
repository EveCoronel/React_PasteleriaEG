import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ detalleProducto }) {
  const [mostrarCount, setMostrarCount] = useState({});
  const [cant, setCant] = useState({});

  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
    setMostrarCount(false);
    setCant(contador);
  };

  const { id, title, price, pictureUrl, descripcion, stock } = detalleProducto;

  return (
    <>
      <div className="detalle">
        <h1>{title}</h1>
        <span>
          <img className="imgDetail" src={pictureUrl} alt={title} />
        </span>
      </div>
      <div className="desc">
        <p className="textoDes">{descripcion}</p>
        <p className="precio">{`$UY ${price}`}</p>
        <p>{`Stock disponible: ${stock} unidades`}</p>
        {mostrarCount ? (
          <ItemCount stock={stock} initial={1} onAdd={onAdd} />
        ) : (
          <button onClick={()=>{alert(`Carrito: ${title}, cantidad: ${cant}`)}} className="btnDetail">Mostrar carrito</button>
        )}
      </div>
    </>
  );
}
