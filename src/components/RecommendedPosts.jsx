import React from "react";
import { Link } from "react-router-dom";

const RecommendedPosts = () => {
  return (
    <div>
      <div>Recommended Posts</div>
      <ul className="flex flex-row gap-6 border-black border-2 p-4 sm:flex-col flex-wrap">
        <Link className="flex flex-row" to={`/category/`}>
          What is the meaning of life?
        </Link>
        <Link className="flex flex-row" to={`/category/`}>
          How do I start a business?
        </Link>
        <Link className="flex flex-row" to={`/category/`}>
          What is the best way to learn a new skill?
        </Link>
      </ul>
    </div>
  );
};

export default RecommendedPosts;
