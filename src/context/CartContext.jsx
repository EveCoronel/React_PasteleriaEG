import React, { createContext, useState } from "react";

export const MyContext = createContext({});

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some(function (x) {
      return x.id === id;
    });
  };

  const addItem = (item, cant) => {
    const newItem = {
      ...item,
      cant,
    };

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const nuevoArray = [...cart];
      nuevoArray[productIndex].cant += cant;
      setCart(nuevoArray);
    } else {
      // setCart([...cart], newItem);
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };
  const clear = () => {
    setCart([]);
  };
  const removeItem = (id) => {
    return setCart(cart.filter((x) => x.id !== id));
  };
  const getItemQty = () => {
    return cart.reduce((acc, x) => acc += x.cant, 0);
  };
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.cant * x.price), 0);
  };

  return (
    <MyContext.Provider
      value={{
        isInCart,
        addItem,
        clear,
        removeItem,
        getItemQty,
        getItemPrice,
        cart,
        setCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
