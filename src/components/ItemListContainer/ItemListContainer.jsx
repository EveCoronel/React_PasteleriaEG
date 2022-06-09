import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const onAdd = (contador) => {
    alert(`Se han agregado ${contador} elementos al carrito`);
  };
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const producto = new Promise((res, rej) => {
      setTimeout(() => {
        res = [
          { id: 1, title: "Torta Oso", price: 1090, pictureUrl: "" },
          { id: 2, title: "LetterCake", price: 899, pictureUrl: "" },
        ];
      }, 2000);

      const producto = new Promise((res, rej) => {
        setTimeout(() => {
          res = [
            { id: 1, title: "Torta Oso", price: 1090, pictureUrl: "" },
            { id: 2, title: "LetterCake", price: 899, pictureUrl: "" },
          ];
        }, 2000);
      });

      producto
        .then((result) => setProductos(result))
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log(producto.res);
        });
    });

    producto
      .then((result) => setProductos(result))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log(producto.res);
      });
  }, []);

  return (
    <>
      <div className="div">
        <article className="card">
          {/* <h2>¡Bienvenido a EG Pastelería, {greeting}!</h2>
          <img
            className="img"
            src="http://placekitten.com/180/180"
            alt="Foto producto"
          /> */}
          <ItemList productos={productos} />
          <ItemCount stock={15} initial={1} onAdd={onAdd} />
        </article>
      </div>
    </>
  );
}
