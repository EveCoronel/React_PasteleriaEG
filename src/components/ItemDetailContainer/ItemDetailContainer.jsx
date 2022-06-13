import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [detalleProducto, setdetalleProducto] = useState([]);

  useEffect(() => {
    const detalleProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: 2,
            title: "LetterCake",
            price: 899,
            pictureUrl: "http://placekitten.com/335/335",
            descripcion:
              "Torta de chocolate con forma de letra, crema de manteca, topping oreos rellenas y bombones",
              stock: 20,
          },
        ]);
      }, 2000);
    });

    detalleProductos
      .then((result) => setdetalleProducto(result))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(detalleProductos);
      });
  }, []);

  return (
    <>
    <article className="contenedor2">
      <div className="contenedor">
        {detalleProducto?.map((detalleProducto) => (
          <>
            <ItemDetail detalleProducto={detalleProducto} />
          </>
        ))}
      </div>
      </article>
    </>
  );
}
