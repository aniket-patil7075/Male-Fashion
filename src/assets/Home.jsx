import React, { useEffect } from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import NewArrivals from "./NewArrivals";
import DealWeek from "./DealWeek";
import Instagram from "./Instagram";
import LatestNews from "./LatestNews";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <LatestNews />
    </div>
  );
}

export default Home;
