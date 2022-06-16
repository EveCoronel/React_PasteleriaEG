import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import img from "../../assets/cake.png";
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
          pictureUrl: 'http://placekitten.com/200/200',
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 2,
          title: "Letter Cake",
          price: 899,
          pictureUrl: "http://placekitten.com/200/200",
          categoria: "Postre",
          stock: "22",
        },
        {
          id: 3,
          title: "Torta de animales",
          price: 1750,
          pictureUrl: "http://placekitten.com/200/200",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 4,
          title: "Torta de caballo",
          price: 1750,
          pictureUrl: "http://placekitten.com/200/200",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 5,
          title: "Torta de gatito",
          price: 1450,
          pictureUrl: "http://placekitten.com/200/200",
          categoria: "Torta decorada",
          stock: "10",
        },
        {
          id: 6,
          title: "Caja de Halloween",
          price: 499,
          pictureUrl: "http://placekitten.com/200/200",
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
