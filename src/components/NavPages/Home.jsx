import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

export default function Home() {
  return (
    <>
      <ItemListContainer greeting={"Pia"} items={ItemList} />
      <ItemDetailContainer />
    </>
  );
}
