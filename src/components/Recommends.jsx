"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Recommends = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://resturant-table-booking-server-side.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const recommendItems = menu.filter(
    (item) => item.recommendation === "recommend"
  );
  console.log(recommendItems);

  return (
    <div className="m-10 lg:mx-12 lg:my-12">
      <h1 className="text-black flex justify-center items-center text-2xl sm:text-4xl font-bold mb-10">
        Chef Recommends
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {recommendItems.map((recommend) => (
          <Card key={recommend._id} recommend={recommend} />
        ))}
      </div>
    </div>
  );
};

export default Recommends;
