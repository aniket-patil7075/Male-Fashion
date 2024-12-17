import React, { useEffect } from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import NewArrivals from "./NewArrivals";
import DealWeek from "./DealWeek";
import Instagram from "./Instagram";
import LatestNews from "./LatestNews";

function Home() {
  
  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") && !sessionStorage.getItem("refreshed")) {
      sessionStorage.setItem("refreshed", "true");
      window.location.reload();
    }
  }, []); 

  return (
    <div>
      <Hero />
      <Collections />
      <NewArrivals />
      <DealWeek />
      <Instagram />
      <p className="text-danger fw-bold text-center " style={{marginTop:"80px"}}>LATESET NEWS</p>
      <h2 className="text-center fw-bold mb-5 ">Fashion New trends</h2>
      <LatestNews />
    </div>
  );
}

export default Home;
