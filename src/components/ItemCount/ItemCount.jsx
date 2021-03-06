import React, { useState } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

export default function ItemCount({ stock, initial, onAdd, cant, setCant }) {
  const [contador, setContador] = useState(initial);
  // let contador = initial;

  const handlerResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
      setCant(contador - 1);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La cantidad minima a agregar es 1",
      });
    }
  };

  const handlerSuma = () => {
    if (contador >= stock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se puede agregar mayor cantidad debido a la falta de stock",
      });
    } else {
      setContador(contador + 1);
      setCant(contador + 1);
    }
  };

  return (
    <>
      <div className="divCount">
        <div className="divStock">
          <button
            className="btn"
            onClick={() => {
              handlerResta();
            }}
          >
            ➖
          </button>
          <span> Cantidad: {contador}</span>
          <button
            className="btn"
            onClick={() => {
              handlerSuma();
            }}
          >
            ➕
          </button>
        </div>
        <button
          className="btnAgregar"
          onClick={() => {
            onAdd(cant);
            setCant(1);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
}
