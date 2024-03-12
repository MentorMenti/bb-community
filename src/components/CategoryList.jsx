import React from "react";
import { Link } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";

const CategoryList = () => {
  return (
    <ul className="w-full md:w-[20%] flex flex-row gap-2 border-black border p-4 sm:flex-col flex-wrap [&>a]:w-40 [&>a]:bg-green-400">
      <Link className="flex flex-row" to={`/category/health`}>
        <MdHealthAndSafety size={24} />
        Health
      </Link>
      <Link className="flex flex-row" to={`/category/skill`}>
        <MdHealthAndSafety size={24} />
        Skill
      </Link>
      <Link className="flex flex-row" to={`/category/enterpreneurship`}>
        <MdHealthAndSafety size={24} />
        Enterpreneurship
      </Link>
      <Link className="flex flex-row" to={`/category/career`}>
        <MdHealthAndSafety size={24} />
        Career
      </Link>
      <Link className="flex flex-row" to={`/category/decisions`}>
        <MdHealthAndSafety size={24} />
        Decisions
      </Link>
      <Link className="flex flex-row" to={`/category/financialLiteracy`}>
        <MdHealthAndSafety size={24} />
        Financial Literacy
      </Link>
      <Link className="flex flex-row" to={`/category/learning`}>
        <MdHealthAndSafety size={24} />
        Learning
      </Link>
      <Link className="flex flex-row" to={`/category/relationships`}>
        <MdHealthAndSafety size={24} />
        Relationships
      </Link>
      <Link className="flex flex-row" to={`/category/spirituality`}>
        <MdHealthAndSafety size={24} />
        Spirituality
      </Link>
    </ul>
  );
};

export default CategoryList;
