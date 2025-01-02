import Banner from "@/components/Banner";
import Category from "@/components/Category";
import Recommends from "@/components/Recommends";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Recommends/>
    </div>
  );
};

export default Homepage;
