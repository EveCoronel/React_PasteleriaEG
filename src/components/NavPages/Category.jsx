import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Items/Items";
import './pages.css'

export default function Category() {
  const { categoryid } = useParams();
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    const producto = new Promise((res, rej) => {
      res([
        {
          id: 1,
          title: "Torta Oso",
          price: 1090,
          pictureUrl: "/assets/tortaOso.png",
          categoria: "Tortasdecoradas",
          stock: "10",
        },
        {
          id: 2,
          title: "Letter Cake",
          price: 899,
          pictureUrl: "/assets/letterCake.png",
          categoria: "Postres",
          stock: "22",
        },
        {
          id: 3,
          title: "Torta de animales",
          price: 1750,
          pictureUrl: "/assets/tortaAnimales.jpg",
          categoria: "Tortasdecoradas",
          stock: "10",
        },
        {
          id: 4,
          title: "Torta de caballo",
          price: 1750,
          pictureUrl: "/assets/tortaCaballo.jpg",
          categoria: "Tortasdecoradas",
          stock: "10",
        },
        {
          id: 5,
          title: "Torta de gatito",
          price: 1450,
          pictureUrl: "/assets/tortaGatitos.jpg",
          categoria: "Tortasdecoradas",
          stock: "10",
        },
        {
          id: 6,
          title: "Caja de Halloween",
          price: 499,
          pictureUrl: "/assets/cajaHalloween.jpg",
          categoria: "Cajasdulces",
          stock: "75",
        },
      ]);
    });

    producto
      .then((result) => {
        let categoria = result.filter((producto) => {
          return producto.categoria === categoryid;
        });
        setCategoria(categoria);
      })
      .catch((error) => {})
      .finally(() => {});
  }, [categoryid]);

  return (
    <>
    <div className="categoryDiv">
      {categoria?.map((producto) => (
        <>
          <Items key={producto.id} producto={producto} />
        </>
      ))}
      </div>
    </>
  );
}