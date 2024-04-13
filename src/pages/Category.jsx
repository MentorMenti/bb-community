import React from "react";
// import { Footer, NavBar } from "../components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Categories from "../components/CategoryList";
import Posts from "../components/Posts";
import RecommendedPosts from "../components/RecommendedPosts";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <NavBar />
      <div
        className="flex flex-col justify-between	sm:flex-row w-12/12 md:py-6 md:px-6 gap-2 md:flex-row
      "
      >
        <Categories />
        <Posts category={id} />
        <RecommendedPosts />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Category;
