import React, { useEffect } from 'react'
import Cartitems from "./Cartitems";

function ShoppingCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Cartitems/>
    </div>
  )
}

export default ShoppingCart