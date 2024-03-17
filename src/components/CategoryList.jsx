import React from "react";
import { Link } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";

const CategoryList = () => {
  return (
    <ul className="w-full md:w-[20%] flex flex-row gap-4 border-black p-4 sm:flex-col flex-wrap [&>a]:w-40">
      <Link
        className="flex flex-row items-center  text-base font-semibold gap-2"
        to={`/category/health`}
      >
        <MdHealthAndSafety size={36} />
        <div>Health</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/skill`}
      >
        <MdHealthAndSafety size={36} />
        <div>Skill</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/enterpreneurship`}
      >
        <MdHealthAndSafety size={36} />
        <div>Enterpreneurship</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/career`}
      >
        <MdHealthAndSafety size={36} />
        <div>Career</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/decisions`}
      >
        <MdHealthAndSafety size={36} />
        <div>Decisions</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2 "
        to={`/category/financialLiteracy`}
      >
        <MdHealthAndSafety size={36} />
        <div>Financial Literacy</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/learning`}
      >
        <MdHealthAndSafety size={36} />
        <div>Learning</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/relationships`}
      >
        <MdHealthAndSafety size={36} />
        <div>Relationships</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-2"
        to={`/category/spirituality`}
      >
        <MdHealthAndSafety size={36} />
        <div>Spirituality</div>
      </Link>
    </ul>
  );
};

export default CategoryList;
