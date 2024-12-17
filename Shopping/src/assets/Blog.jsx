
import { useEffect } from "react";
import LatestNews from "./LatestNews";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blogMainDiv">
      <div className="blogDiv">
        <img src="/breadcrumb-bg.jpg" className="w-100" alt="" />
      </div>
      <div className="" style={{paddingTop:"100px"}}>
        <LatestNews />
        <div style={{paddingTop:"50px"}}>

        </div>
        <LatestNews />
        <div style={{paddingTop:"50px"}}>

        </div>
        <LatestNews />
      </div>
    </div>
  );
}

export default Blog;
