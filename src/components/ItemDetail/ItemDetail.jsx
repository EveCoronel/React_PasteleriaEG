import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import "./ItemDetail.css";
import Swal from "sweetalert2";

export default function ItemDetail({ detalleProducto }) {
  const [cant, setCant] = useState(1);
  const { addItem, loading } = useContext(MyContext);
  const [mostrarAdd, setMostrarAdd] = useState(true);
  const onAdd = (cant) => {
    Swal.fire({
      icon: "success",
      title: "Se ha agregado correctamente",
    });
    addItem(detalleProducto, cant);
    setMostrarAdd(false);
  };
  const divStyle = {
    height: "100vh",
  };
  const { title, price, pictureUrl, descripcion, stock } = detalleProducto;

  if (loading) {
    return (
      <div style={divStyle} className="div">
        <article className="articulo">
          <Loader></Loader>
        </article>
      </div>
    );
  }

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
        {/* <p className="precio">$UY{price}</p> */}
        <p>$UY{price}</p>
        <p>{`Stock disponible: ${stock} unidades`}</p>
        <br />
        {mostrarAdd ? (
          <ItemCount
            stock={stock}
            initial={1}
            onAdd={onAdd}
            cant={cant}
            setCant={setCant}
          />
        ) : (
          <>
            <Link to={"/cart"}>
              <button className="btnTerminar">Terminar mi compra</button>
            </Link>
            <Link to={"/"}>
              <button className="btnTerminar">Continuar comprando</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
