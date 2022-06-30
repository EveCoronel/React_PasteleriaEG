import ItemDetail from "../ItemDetail/ItemDetail";
import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const [buscador, setBuscador] = useState({});
  const { itemsid } = useParams();

  var id = itemsid;
  const coleccion = "items";
  const db = getFirestore();

  const itemsDetailCollection = doc(db, coleccion, id);

  useEffect(() => {
    getDoc(itemsDetailCollection).then((res) => {
      setdetalleProducto({ ...res.data(), id });
    });
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
