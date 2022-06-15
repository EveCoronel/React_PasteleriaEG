import React, { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);
  return (
    <>
      <div className="divCount">
        <div className="divStock">
          <button className="btn"
            onClick={() => {
              if (contador > 1) {
                setContador(contador - 1);
              } else {
                alert("La cantidad minima a agregar es 1");
              }
            }}
          >
           ➖
          </button>
          <span> Cantidad: {contador}</span>
          <button className="btn"
            onClick={() => {
              if (contador >= stock) {
                alert(
                  "No se puede agregar mayor cantidad debido a la falta de stock"
                );
              } else {
                setContador(contador + 1);
              }
            }}
          >
            ➕
          </button>
        </div>
        <button className="btnAgregar" onClick={() => onAdd(contador)}>Agregar al carrito</button>
      </div>
    </>
  );
}
