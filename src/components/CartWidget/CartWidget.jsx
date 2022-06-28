import React, { useContext, useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MyContext } from "../../context/CartContext";

function CartWidget() {
  const { getItemQty, cart } = useContext(MyContext);
  const [cantidad, setCantidad] = useState(0);
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    let cant = getItemQty();
    console.log(cant);

    if (cart.length > 0) {
      var boolean = false;
      setEmptyCart(boolean);
    } else {
      var boolean = true;
      setEmptyCart(boolean);
    }

    return () => {
      setCantidad(cant);
    };
  }, [cart]);

  console.log(cantidad);

  return (
    <>
      {!emptyCart ? (
        <div>
          <ShoppingCartIcon />
          <span>{cantidad}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CartWidget;
