import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../../context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [detalleProducto, setdetalleProducto] = useState([]);
  const { itemsid } = useParams();
  const { loading, setLoading } = useContext(MyContext);
  var id = itemsid;
  const coleccion = "items";
  const db = getFirestore();

  const itemsDetailCollection = doc(db, coleccion, id);
  const divStyle = {
    height: "100vh",
  };

  useEffect(() => {
    setLoading(true);
    getDoc(itemsDetailCollection).then((res) => {
      setdetalleProducto({ ...res.data(), id });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={divStyle} className="div">
        <article className="articulo">
          <Loader></Loader>
        </article>
      </div>
    );
  }

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
