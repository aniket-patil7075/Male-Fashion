import React from "react";
import { useAuth } from "../context/auth";
import Hero from "./Hero";

function Home() {
  const [auth, setAuth] = useAuth();
  return(
    <div>
      <Hero/>
      {JSON.stringify(auth)}
    
   </div>
  )
}

export default Home;
