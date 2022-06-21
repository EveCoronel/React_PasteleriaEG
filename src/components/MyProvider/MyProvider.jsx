import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

export default function MyProvider({ Children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const addItem = (item, contador) => {
    const newItem = {
      ...item,
      contador,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const nuevoArray = [...cart];

      nuevoArray[productIndex].contador += contador;
      setCart(nuevoArray);
    } else {
      setCart([...cart], newItem);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };
  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.contador), 0);
  };
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.contador * x.precio), 0);
  };

  return (
    <Provider
      value={{
        isInCart,
        addItem,
        emptyCart,
        deleteItem,
        getItemQty,
        getItemPrice,
        cart,
      }}
    >
      {Children}
    </Provider>
  );
}
