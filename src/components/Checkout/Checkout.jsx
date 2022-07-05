import React, { useState } from "react";
import "./Checkout.css";
import { MyContext } from "../../context/CartContext";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Checkout({ setEmptyCart }) {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");

  const {
    cart,
    getItemPrice,
    setOrderComplete,
    orderComplete,
    setIdCompra,
    setCart,
  } = useContext(MyContext);
  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const confirmarOrden = (event) => {
    const precioTotal = getItemPrice();
    const order = {
      buyer: { nombre, numero, email },
      items: cart,
      total: precioTotal,
      /* fecha */
    };
    event.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => {
      console.log(id);
      setIdCompra(id);
    });
    const validateEmail = (email) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    if (validateEmail(email)) {
      setOrderComplete(true);
      setEmptyCart(true);
      setCart([]);
    } else {
      alert("Ingresa un correo válido");
    }
  };

  return (
    <div className="contenedorForm">
      <form className="form">
        <div>
          <h3>Completa aquí para realizar la orden:</h3>
          <section>
            <label for="nombre">Nombre</label>
            <input
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              type="name"
              name="nombre"
              placeholder="Nombre"
              required
            />
          </section>
          <section>
            <label for="numero">Núemero de teléfono</label>
            <input
              onChange={(e) => {
                setNumero(e.target.value);
              }}
              type="tel"
              name="telefono"
              placeholder="Número"
              required
            />
          </section>
          <section>
            <label for="fecha"> Fecha de entrega de tu pedido</label>
            <input
              onChange={(e) => {
                setFecha(e.target.value);
              }}
              type="date"
              name="fecha"
              required
            />
          </section>
          <section>
            <label for="email">Correo electrónico</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              placeholder="Correo electrónico"
              required
            />
          </section>

          <button onClick={confirmarOrden}>Confirmar orden</button>
        </div>
      </form>
    </div>
  );
}
