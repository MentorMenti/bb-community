import React from "react";
// import { Footer, NavBar } from "../components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Categories from "../components/Categories";
import Posts from "../components/Posts";
import RecommendedPosts from "../components/RecommendedPosts";

const Dashboard = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex justify-between	">
        <Categories />
        <Posts />
        <RecommendedPosts />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Dashboard;
