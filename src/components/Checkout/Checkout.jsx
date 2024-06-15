import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MyContext } from "../../context/CartContext";
import "./Checkout.css";

export default function Checkout({ setEmptyCart }) {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [nota, setNota] = useState("");

  const {
    cart,
    getItemPrice,
    setOrderComplete,
    orderComplete,
    setIdCompra,
    setCart,
    setLoading,
  } = useContext(MyContext);
  try{
  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const errorPedido = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar los datos requeridos",
    });
  };

  const pedidoExitoso = () => {
    Swal.fire({
      icon: "success",
      title: "¡Pedido realizado con exito! 😋",
    });
  };

  const confirmarOrden = (event) => {
    const precioTotal = getItemPrice();
    const order = {
      buyer: { nombre, numero, email },
      items: cart,
      total: precioTotal,
      fecha,
      nota,
    };

    event.preventDefault();

    if (validateEmail(email)) {
      setOrderComplete(true);
      setEmptyCart(true);
      addDoc(orderCollection, order).then(({ id }) => {
        setIdCompra(id);
        setLoading(false);
      });
      setCart([]);
      window.localStorage.setItem("cart", []);
      pedidoExitoso();
    } else {
      errorPedido();
    }
  };

  return (
    <div className="contenedorForm">
      <form className="form">
        <div className="divForm">
          <h3>Completa aquí para realizar la orden</h3>
          <section>
            <label for="nombre">Nombre:</label>
            <br />
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
            <label for="numero">Núemero de teléfono:</label>
            <br />
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
            <label for="fecha"> Fecha de entrega de tu pedido:</label>
            <br />
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
            <label for="email">Correo electrónico:</label>
            <br />
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
          <section>
            <label for="nota">Nota:</label>
            <br />
            <input
              onChange={(e) => {
                setNota(e.target.value);
              }}
              id="nota"
              placeholder="Ingresa una nota"
            />
          </section>

          <button className="btnCheckout" onClick={confirmarOrden}>
            Confirmar orden
          </button>
        </div>
      </form>
    </div>
  );
}
catch(e){
  console.log("ocurrio un error")
}
}
