import React from "react";
import { MyContext } from "../../context/CartContext";
import { useContext } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

export default function OrderComplete() {
  const { idCompra } = useContext(MyContext);

  return (
    <>
      <div className="contenedorForm">
        <article className="form">
        <h1>¡Gracias por tu compra!</h1>
        <span>Nº de pedido: {idCompra} </span>
        <p>Nos comunicaremos contigo en un plazo de 24 a 72 horas.</p>
        <Link to={'/'}>
        <button className="btnCheckout">Volver al inicio</button>
        </Link>
        </article>      
      </div>
    
    </>
  );
}
