import React from "react";
import { Link } from "react-router-dom";
import { MdHealthAndSafety } from "react-icons/md";

// icons
import Career from "../icons/Career.png";
import DecisionMaking from "../icons/DecisionMaking.png";
import Entrepreneur from "../icons/Entrepreneur.png";
import FinancialLiteracy from "../icons/FinancialLiteracy.png";
import Health from "../icons/Health.png";
import Learning from "../icons/Learning.png";
import Relationships from "../icons/Relationships.png";
import Skills from "../icons/Skills.png";
import Spirituality from "../icons/Spirituality.png";

const CategoryList = () => {
  return (
    <ul className="w-full md:w-[20%] flex flex-row gap-4 border-black p-4 sm:flex-col flex-wrap [&>a]:w-40">
      <Link
        className="flex flex-row items-center  text-base font-semibold gap-3"
        to={`/category/health`}
      >
        <img src={Health} className="size-9" />
        <div>Health</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/skill`}
      >
        <img src={Skills} className="size-9" />
        <div>Skill</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/enterpreneurship`}
      >
        <img src={Entrepreneur} className="size-9" />
        <div>Enterpreneurship</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/career`}
      >
        <img src={Career} className="size-9" />
        <div>Career</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/decisions`}
      >
        <img src={DecisionMaking} className="size-9" />
        <div>Decisions</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3 "
        to={`/category/financialLiteracy`}
      >
        <img src={FinancialLiteracy} className="size-9" />
        <div>Financial Literacy</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/learning`}
      >
        <img src={Learning} className="size-9" />
        <div>Learning</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/relationships`}
      >
        <img src={Relationships} className="size-9" />
        <div>Relationships</div>
      </Link>
      <Link
        className="flex flex-row items-center text-base font-semibold gap-3"
        to={`/category/spirituality`}
      >
        <img src={Spirituality} className="size-9" />
        <div>Spirituality</div>
      </Link>
    </ul>
  );
};

export default CategoryList;
