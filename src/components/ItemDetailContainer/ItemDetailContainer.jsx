import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams, Link } from "react-router-dom";

export default function ItemDetailContainer() {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const { itemsid } = useParams();

  console.log(`Id por parametros ${itemsid}`);

  useEffect(() => {
    const detalleProductos = new Promise((res, rej) => {
      res([
        {
          id: 1,
          title: "Torta Oso",
          price: 1090,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Tortasdecoradas",
          descripcion:
            "Torta con dibujo de oso panda, decorada en glase y relleno de dulce de leche.",
          stock: "10",
        },
        {
          id: 2,
          title: "Letter Cake",
          price: 899,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Postres",
          descripcion:
            "Torta de chocolate con forma de letra, crema de manteca, topping oreos rellenas y bombones.",
          stock: "22",
        },
        {
          id: 3,
          title: "Torta de animales",
          price: 1750,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Tortasdecoradas",
          descripcion:
            "Torta decorada con animales de la selva, decoración con fondan y relleno de dulce de leche.",
          stock: "10",
        },
        {
          id: 4,
          title: "Torta de caballo",
          price: 1750,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Tortasdecoradas",
          descripcion:
            "Torta rustica con un detalle en madera, decoración en crema de manteca y flores naturales.",
          stock: "10",
        },
        {
          id: 5,
          title: "Torta de gatito",
          price: 1450,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Tortasdecoradas",
          descripcion:
            "Torta de cumpleaños con forma de gatito, decoración en masa de azucar.",
          stock: "10",
        },
        {
          id: 6,
          title: "Caja de Halloween",
          price: 499,
          pictureUrl: "http://placekitten.com/410/410",
          categoria: "Cajasdulces",
          descripcion:
            "Caja de Halloween que contiene 4 cookies de vainilla decoradas con masa de azucar.",
          stock: "75",
        },
      ]);
    });

    detalleProductos
      .then((result) => {
        let itemId = result.find((producto) => {
          return producto.id == itemsid;
        });

        console.log(itemId);
        setdetalleProducto(itemId);
      })
      .catch((error) => {})
      .finally(() => {});
  }, []);

  return (
    <>
      <article className="contenedor2">
        <div className="contenedor">
          <>
            <ItemDetail detalleProducto={detalleProducto} />
          </>
        </div>
      </article>
    </>
  );
}
