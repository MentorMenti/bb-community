import React from "react";
import { Footer, NavBar } from "../components";
import Categories from "../components/CategoryList";
import Posts from "../components/Posts";
import RecommendedPosts from "../components/RecommendedPosts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import Login from "../components/Login";

const Home = () => {
  const [user, loadingAuth] = useAuthState(auth);
  if (loadingAuth) return <p>Loading...</p>;
  if (!user) return <Login />;

  return (
    <React.Fragment>
      <div className="w-full ">
        <NavBar />
        <div className=" bg-[#f5f9fa] md:py-6 md:px-6 flex items-start flex-col md:m-0 px-4 gap-4  md:flex-row">
          <Categories />
          <Posts />
          <RecommendedPosts />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
