import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <button className="btnDetail">
            <Link className="linkDetail" to={"/cart"}>
              Terminar mi compra
            </Link>
          </button>
        )}
      </div>
    </>
  );
}
