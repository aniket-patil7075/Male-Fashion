import React from "react";
import { useAuth } from "../context/auth";
import Hero from "./Hero";
import Collections from "./Collections";
import DealWeek from "./DealWeek";

function Home() {
  const [auth, setAuth] = useAuth();
  return(
    <div>
      <Hero/>
      <Collections/>
      <DealWeek/>

      {/* {JSON.stringify(auth)} */}
    
   </div>
  )
}

export default Home;
