import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Get login data and check if the user is logged in
    const loginData = JSON.parse(localStorage.getItem("login"));
    if (loginData?.user?.email) {
      const userEmail = loginData.user.email;
      const cartKey = `cart_${userEmail}`; // Unique key for each user
      const existingCartItems = localStorage.getItem(cartKey);

      if (existingCartItems) {
        setCart(JSON.parse(existingCartItems)); // Set cart state
      }
    }
  }, []); // Only run once when the component mounts

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
