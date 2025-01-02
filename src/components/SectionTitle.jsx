import React from "react";
import triangle from "../images/Rectangle 3.png";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img className="mb-5" src={subHeading} alt="" />
      <img src={triangle} alt="" />
      <h3 className="text-2xl uppercase my-3 font-medium">{heading}</h3>
      <img src={triangle} alt="" />
    </div>
  );
};

export default SectionTitle;
