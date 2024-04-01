import { Link } from "react-router-dom";

const RecommendedPosts = () => {
  return (
    <div className="border bg-white border-solid rounded-lg p-4 hidden md:block md:w-[20%]">
      <div>Recommended Posts</div>
      <ul className="flex flex-row gap-6 p-4 sm:flex-col flex-wrap">
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
