import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Category from "../NavPages/Category";
export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const producto = new Promise((res, rej) => {
      res([
        {
          id: 1,
          title: "Torta Oso",
          price: 1090,
          pictureUrl: '/assets/tortaOso.png',
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 2,
          title: "Letter Cake",
          price: 899,
          pictureUrl: "/assets/letterCake.png",
          categoria: "Postre",
          stock: "22",
        },
        {
          id: 3,
          title: "Torta de animales",
          price: 1750,
          pictureUrl: "/assets/tortaAnimales.jpg",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 4,
          title: "Torta de caballo",
          price: 1750,
          pictureUrl: "/assets/tortaCaballo.jpg",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 5,
          title: "Torta de gatito",
          price: 1450,
          pictureUrl: "/assets/tortaGatitos.jpg",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 6,
          title: "Caja de Halloween",
          price: 499,
          pictureUrl: "/assets/cajaHalloween.jpg",
          categoria: "Caja dulce",
          stock: "75"
        },
      ]);
    });

    producto
      .then((result) => {
        setProductos(result)
      })
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
