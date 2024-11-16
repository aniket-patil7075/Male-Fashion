import React, { useEffect } from "react";
import Hero from "./Hero";
import Collections from "./Collections";
import NewArrivals from "./NewArrivals";
import DealWeek from "./DealWeek";
import Instagram from "./Instagram";
import LatestNews from "./LatestNews";

function Home() {
  useEffect(() => {
    // Check if the page has already been refreshed after login
    if (sessionStorage.getItem("loggedIn") && !sessionStorage.getItem("refreshed")) {
      // Set a flag to prevent infinite reloads
      sessionStorage.setItem("refreshed", "true");
      // Reload the page once after a successful login
      window.location.reload();
    }
  }, []); // Empty dependency array ensures it runs only once

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
