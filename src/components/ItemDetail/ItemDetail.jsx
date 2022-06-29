import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { MyContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemDetail({ detalleProducto }) {
  const [cant, setCant] = useState(1);
  const { addItem } = useContext(MyContext);
  const [mostrarAdd, setMostrarAdd] = useState(true);

  const onAdd = (cant) => {
    addItem(detalleProducto, cant);
    setMostrarAdd(false);
  };

  const { title, price, pictureUrl, descripcion, stock } = detalleProducto;

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
        {mostrarAdd ? (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={onAdd}
            cant={cant}
            setCant={setCant}
          />
        ) : (
          <Link to={"/cart"}>
            <button className="btnTerminar">Terminar mi compra</button>
          </Link>
        )}
      </div>
    </>
  );
}
