import React, { useContext, useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MyContext } from "../../context/CartContext";

function CartWidget() {
  const { getItemQty, cart } = useContext(MyContext);
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    
    console.log(cant);

    if (cart.length > 0) {
      var boolean = false;
      setEmptyCart(boolean);
    } else {
       boolean = true;
      setEmptyCart(boolean);
    }

    return () => {

    };
  }, [cart]);

  var cant = getItemQty();

  return (
    <>
      {!emptyCart ? (
        <div>
          <ShoppingCartIcon />
          <span>{cant}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default CartWidget;
