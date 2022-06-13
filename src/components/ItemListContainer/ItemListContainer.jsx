import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const producto = new Promise((res, rej) => {
      setTimeout(() => {
        res ([
          { id: 1, title: "Torta Oso", price: 1090, pictureUrl: "http://placekitten.com/150/180" },
          { id: 2, title: "LetterCake", price: 899, pictureUrl: "http://placekitten.com/150/180" },
        ]);
      }, 2000);
    });

    producto
      .then((result) => setProductos(result))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(producto);
      });

  }, []);

  return (
    <>
      <div className="div">
        <article className="articulo">
          <ItemList productos={productos} />
        </article>
      </div>
    </>
  );
}
