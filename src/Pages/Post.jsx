import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BiSolidUpvote } from "react-icons/bi";

const Post = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="border-black border-2 flex flex-col justify-center">
        <div className="border-black border-2 p-4 flex flex-col gap-4 ">
          <div className="border-black border-2 p-4 flex flex-row gap-4 ">
            <CgProfile size={24} />
            <div>User1</div>
          </div>
          <div className="border-black border-2 p-2 ">The question</div>
          <button>
            <BiSolidUpvote size={24} />
          </button>
        </div>

        {/* <div className="flex flex-row  gap-4">
          <CgProfile size={24} />
          <input
            className="border-black border-2 p-1 "
            type="text"
            name="name"
            placeholder="Enter your question"
          />
        </div> */}
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Post;
