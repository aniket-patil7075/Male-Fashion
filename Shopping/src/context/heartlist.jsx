import { createContext, useContext, useEffect, useState } from "react";

const HeartContext = createContext();

const HeartProvider = ({ children }) => {
  const [heart, setHeart] = useState([]);

  useEffect(() => {
    // Retrieve the login data and extract the email
    const loginData = localStorage.getItem("login");

    if (!loginData) {
      return;
    }

    const parsedLoginData = JSON.parse(loginData);
    const userEmail = parsedLoginData?.user?.email; // Access email from the user object

    if (userEmail) {
      // Construct the unique heart key using the email
      const heartKey = `heart_${userEmail}`;
      const existingHeartItems = localStorage.getItem(heartKey);
      if (existingHeartItems) {
        setHeart(JSON.parse(existingHeartItems));
      }
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
