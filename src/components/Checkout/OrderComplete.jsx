import React, { useEffect, useState } from "react";
import { MyContext } from "../../context/CartContext";
import { useContext } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function OrderComplete() {
  const { idCompra, loading, setLoading } = useContext(MyContext);
  
  useEffect(() => {
    setLoading(true);
  }, []);

  const divStyle = {
    height: "80vh",
  };

  if (loading) {
    return (
      <>
        <div style={divStyle} className="div">
          <article className="articulo">
            <Loader></Loader>
          </article>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="contenedorOrderComplete">
        <article className="form">
          <h1>¡Gracias por tu compra!</h1>
          <span>Nº de pedido: {idCompra} </span>
          <p>Nos comunicaremos contigo en un plazo de 24 a 72 horas.</p>
          <Link to={"/"}>
            <button className="btnCheckout">Volver al inicio</button>
          </Link>
        </article>
      </div>
    </>
  );
}
