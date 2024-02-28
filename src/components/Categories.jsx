import React from "react";
import { MdHealthAndSafety } from "react-icons/md";

const Categories = () => {
  return (
    <ul className="flex flex-col gap-6">
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 1
      </div>
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 2
      </div>
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 3
      </div>
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 4
      </div>
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 5
      </div>
      <div className="flex flex-row">
        <MdHealthAndSafety size={24} />
        Category 6
      </div>
    </ul>
  );
};

export default Categories;
