import React from "react";


export default function Items({ producto }) {
  const { id, title, price, pictureUrl } = producto;

  return (
    <>
    <div>
      <h1>{title}</h1>
      <span> <img src={pictureUrl} alt={title} /></span>
      <p>{price}</p>
    </div>
    </>
  )
}
