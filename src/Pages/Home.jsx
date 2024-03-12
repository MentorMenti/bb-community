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
      <NavBar />
      <div className="md:py-6 md:px-6 flex flex-col gap-4 justify-between md:flex-row">
        <Categories />
        <Posts />
        <RecommendedPosts />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
