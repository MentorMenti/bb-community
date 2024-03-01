import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div className="w-5/12 flex flex-col gap-4">
      <div className="border-black border-2 p-4 flex flex-col	gap-4">
        <div className="border-black border-2 p-4 flex flex-row gap-4">
          <div>
            <CgProfile size={24} />
          </div>
          <input
            className="border-black border-2 p-1 w-full"
            type="text"
            name="name"
            placeholder="Enter your question"
          />
        </div>

        <button className="border-black border-2 p-2">Post</button>
      </div>
      <div className="border-black border-2 p-4 flex flex-col 	gap-4">
        <div className="border-black border-2 p-4 flex flex-row gap-4">
          <CgProfile size={24} />
          <div>User1</div>
        </div>
        <div className="border-black border-2 p-2 ">The question</div>
        <Link to={`/post`} className="border-black border-2 p-2 w-36">
          Reply
        </Link>
      </div>{" "}
    </div>
  );
};

export default Posts;
