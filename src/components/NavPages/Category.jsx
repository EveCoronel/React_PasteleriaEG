import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../Items/Items";
import "./pages.css";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function Category() {
  const { categoryid } = useParams();
  const [categoria, setCategoria] = useState();

  var aux = categoryid;
  const coleccion = "items";
  const db = getFirestore();

  const itemsCategory = query(
    collection(db, coleccion),
    where("categoria", "==", `${aux}`)
  );

  useEffect(() => {
    getDocs(itemsCategory).then((res) => {
      setCategoria(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryid]);

  return (
    <>
      <div className="categoryDiv">
        <article className="articleDiv">
        {categoria?.map((producto) => (
          <>
            <Items key={producto.id} producto={producto} />
          </>
        ))}
        </article>
      </div>
    </>
  );
}
