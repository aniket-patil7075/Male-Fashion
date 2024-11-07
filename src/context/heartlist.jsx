import { createContext, useContext, useEffect, useState } from "react";

// heartlist.js
const HeartContext = createContext();

const HeartProvider = ({ children }) => {
  const [heart, setHeart] = useState([]);

  useEffect(() => {
    const existingHeartItems = localStorage.getItem('heart');
    if (existingHeartItems) {
      setHeart(JSON.parse(existingHeartItems));
    }
  }, []);

  return (
    <HeartContext.Provider value={[heart, setHeart]}>
      {children}
    </HeartContext.Provider>
  );
};

const useHeart = () => useContext(HeartContext);

export { useHeart, HeartProvider };
