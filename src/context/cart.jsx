import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    
    const loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData?.user?.email) {
      const userEmail = loginData.user.email;
      const cartKey = `cart_${userEmail}`; 
      const existingCartItems = localStorage.getItem(cartKey);

      if (existingCartItems) {
        setCart(JSON.parse(existingCartItems)); 
      }
    }
  }, []); 

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
