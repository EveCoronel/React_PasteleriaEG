import React, { useContext, useState } from "react";
import { useEffect, useRef } from "react";
import { MyContext } from "../../context/CartContext";
import "./Cart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import OrderComplete from "../Checkout/OrderComplete";

export default function Cart() {
  const {
    getItemPrice,
    removeItem,
    cart,
    orderComplete,
    setOrderComplete,
    setCart,
    loading,
  } = useContext(MyContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [mostrarCheckOut, setMostrarCheckOut] = useState(false);
  const [mostrarBtnTerminar, setMostrarBtnTerminar] = useState(true);

  useEffect(() => {
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.log(error);
    }
    setOrderComplete(false);
  }, []);

  const checkoutRef = useRef(null);
  let precioTotal = getItemPrice();

  const handleCheckOut = () => {
    setMostrarCheckOut(true);
    setMostrarBtnTerminar(false);
    // Desplazar la vista al componente de checkout
    setTimeout(() => {
      checkoutRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
          <p>
            <b>Cantidad:</b> {producto.cant}
          </p>
          <p>
            <b>Precio unidad</b> ${producto.price}
          </p>
          <p>
            <b>Precio total</b> ${precio}
          </p>
        </article>
        <button onClick={() => removeItem(producto.id)}>
          <DeleteForeverIcon />
        </button>
      </div>
    );
  });

  if (orderComplete) {
    return <OrderComplete></OrderComplete>;
  }

  if (!emptyCart) {
    return (
      <div className="divCarrito">
        {productosEnCarrito}
        <span className="terminarCompra">
          <b> Total a pagar: ${precioTotal}</b>
        </span>

        {mostrarBtnTerminar ? (
          <button
            onClick={() => handleCheckOut()}
            className="btnTerminarCompra"
          >
            Terminar compra
          </button>
        ) : (
          ""
        )}
        {mostrarCheckOut ? (
          <div ref={checkoutRef}>
            <Checkout setEmptyCart={setEmptyCart} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <>
      <div className="carritoVacio">
        <h3>Tu carrito esta vacío 😱 No dudes en llenarlo de productos! 😋</h3><br></br>
        <Link className="linkCarrito" to={"/"}>
          <button className="btnCarrito">Comenzar a comprar</button>
        </Link>
      </div>
    </>
  );
}
/* export default function Cart() {
  const {
    getItemPrice,
    removeItem,
    cart,
    orderComplete,
    setOrderComplete,
    setCart,
    loading,
  } = useContext(MyContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [mostrarCheckOut, setMostrarCheckOut] = useState(false);
  const [mostrarBtnTerminar, setMostrarBtnTerminar] = useState(true);

  useEffect(() => {
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.log(error);
    }
    setOrderComplete(false);
  }, []);

  const checkoutRef = useRef(null);
  let precioTotal = getItemPrice();
  const handleCheckOut = () => {
    setMostrarCheckOut(true);
    setMostrarBtnTerminar(false);
    checkoutRef.current.scrollIntoView({ behavior: "smooth" });
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
          <p>
            <b>Cantidad:</b> {producto.cant}
          </p>
          <p>
            <b>Precio unidad</b> ${producto.price}
          </p>
          <p>
            <b>Precio total</b> ${precio}
          </p>
        </article>
        <button onClick={() => removeItem(producto.id)}>
          <DeleteForeverIcon />
        </button>
      </div>
    );
  });

  if (orderComplete) {
    return <OrderComplete></OrderComplete>;
  }

  if (!emptyCart) {
    return (
      <div className="divCarrito">
        {productosEnCarrito}
        <span className="terminarCompra">
          <b> Total a pagar: ${precioTotal}</b>
        </span>

        {mostrarBtnTerminar ? (
          <button
            onClick={() => handleCheckOut()}
            className="btnTerminarCompra"
          >
            Terminar compra
          </button>
        ) : (
          ""
        )}
        {mostrarCheckOut ? (
          <div ref={checkoutRef}>
            <Checkout setEmptyCart={setEmptyCart} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  return (
    <>
      <div className="carritoVacio">
        <h3>Tu carrito esta vacío 😱 No dudes en llenarlo de productos! 😋</h3>
        br
        <Link className="linkCarrito" to={"/"}>
          <button className="btnCarrito">Comenzar a comprar</button>
        </Link>
      </div>
    </>
  );
} */