import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { MyContext } from "../../context/CartContext";
import "./Cart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import OrderComplete from "../Checkout/OrderComplete";

export default function Cart() {
  const { getItemPrice, removeItem, cart, orderComplete, setOrderComplete} = useContext(MyContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [mostrarCheckOut, setMostrarCheckOut] = useState(false);
  const [mostrarBtnTerminar, setMostrarBtnTerminar] = useState(true);

  useEffect(() => {
    setOrderComplete(false)
  }, [])
  

  let precioTotal = getItemPrice();
  const handleCheckOut = () => {
    setMostrarCheckOut(true);
    setMostrarBtnTerminar(false);
  };

  useEffect(() => {
    cart.length > 0 ? setEmptyCart(false) : setEmptyCart(true);
  }, [cart]);

  var productosEnCarrito = cart.map((producto) => {
    let precio = producto.cant * producto.price;
    return (
      <div className="divProducto">
        <h3 className="title"> {producto.title}</h3>
        <article className="articleDetalle">
          <img
            className="itemImg"
            src={producto.pictureUrl}
            alt={producto.title}
          />
          <p>{producto.descripcion}</p>
        </article>
        <article className="articlePrecio">
          <span>Cantidad: {producto.cant}</span>
          <p>Precio unidad ${producto.price}</p>
          <p>Precio total ${precio}</p>
        </article>
        <button onClick={() => removeItem(producto.id)}>
          <DeleteForeverIcon />
        </button>
      </div>
    );
  });

  if(orderComplete){
    return (
    <OrderComplete></OrderComplete>
    )
  }

  if (!emptyCart) {
    return (
      <div className="divCarrito">
        {productosEnCarrito}
        <span className="terminarCompra"> Total a pagar: ${precioTotal}</span>

        {mostrarBtnTerminar ? (
          <button onClick={() => handleCheckOut()} className="btnTerminarCompra">
            Terminar compra
          </button>
        ) : (
          ""
        )}
        {mostrarCheckOut ? <Checkout setEmptyCart={setEmptyCart}/> : ""}
      </div>
    );
  }

  return (
    <>
      <div className="carritoVacio">
        <h3>Tu carrito esta vacío</h3>
        <Link className="linkCarrito" to={"/"}>
          <button className="btnCarrito">Comenzar a comprar</button>
        </Link>
      </div>
    </>
  );
}
