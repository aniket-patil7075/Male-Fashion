import React from "react";
import { useAuth } from "../context/auth";
import Hero from "./Hero";
import Collections from "./Collections";

function Home() {
  const [auth, setAuth] = useAuth();
  return(
    <div>
      <Hero/>
      <Collections/>
      {JSON.stringify(auth)}
    
   </div>
  )
}

export default Home;
