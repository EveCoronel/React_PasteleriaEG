import React, { createContext, useState } from "react";

export const MyContext = createContext({});

export default function CartContext({ children }) {
  const [cart, setCart] = useState(
    window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : []
  );
  const [orderComplete, setOrderComplete] = useState(false);
  const [idCompra, setIdCompra] = useState("");

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
      setCart([...cart, newItem]);
    }

    setLocalStorage(cart);
  };
  const clear = () => {
    setCart([]);
    setLocalStorage(cart);
  };
  const removeItem = (id) => {
    setLocalStorage(cart.filter((x) => x.id !== id));
    return setCart(cart.filter((x) => x.id !== id));
  };
  const getItemQty = () => {
    return cart.reduce((acc, x) => (acc += x.cant), 0);
  };
  const getItemPrice = () => {
    return cart.reduce((acc, x) => (acc += x.cant * x.price), 0);
  };

  const setLocalStorage = (value) => {
    console.log("Valor", value);
    try {
      window.localStorage.setItem("cart", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
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
        setOrderComplete,
        orderComplete,
        idCompra,
        setIdCompra,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
