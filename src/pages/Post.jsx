import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BiSolidUpvote } from "react-icons/bi";

const Post = () => {
  const [showReply, setShowReply] = useState(false);

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col items-center gap-4 ">
        <div className="border-black border-2 p-4 flex flex-col gap-4 w-2/5">
          <div className="border-black border-2 p-4 flex flex-row gap-4 ">
            <CgProfile size={24} />
            <div>User1</div>
          </div>
          <div className="border-black border-2 p-2 ">The question</div>
          <div className="flex flex-row gap-2">
            <button>
              <BiSolidUpvote size={24} />
            </button>
            <div>14</div>
          </div>
        </div>

        <div className="border-black border-2 p-4 gap-2 flex flex-col w-2/5">
          <div className="border-black border-2 p-4 flex flex-row gap-4">
            <CgProfile size={24} />
            <input
              className="border-black border-2 p-2 w-full"
              type="text"
              name="name"
              placeholder="Add a comment"
            />
          </div>

          <button
            onClick={(e) => setShowReply(true)}
            className="border-black border-2 p-2 w-20"
          >
            submit
          </button>
        </div>

        <div className="border-black border-2 p-4 w-2/5">
          <div className="text-2xl">Answered by others</div>
          <br />
          <div className="flex flex-col gap-4">
            <div className="border-black border-2 p-4 flex flex-row gap-4 ">
              <CgProfile size={24} />
              <div>User2</div>
            </div>
            <div className="border-black border-2 p-2 ">Answer</div>

            <div className="flex flex-row gap-6">
              <div className="flex flex-row gap-4">
                <button>
                  <BiSolidUpvote size={24} />
                </button>
                <div>14</div>
              </div>
              <button className="border-black border-2 p-2 w-20">Reply</button>
            </div>
            {showReply ? (
              <div className="pl-20 flex flex-col gap-4">
                <div className="border-black border-2 p-4 flex flex-row gap-4 ">
                  <CgProfile size={24} />
                  <div>User2</div>
                </div>
                <div className="border-black border-2 p-2 ">Answer</div>

                <div className="flex flex-row gap-6">
                  <div className="flex flex-row gap-2">
                    <button>
                      <BiSolidUpvote size={24} />
                    </button>
                    <div>14</div>
                  </div>
                  <button className="border-black border-2 p-2 w-20">
                    Reply
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Post;
