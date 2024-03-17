import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Post = () => {
  const [showReply, setShowReply] = useState(false);

  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState({
    comments: [],
    upvotes: 0,
    downvotes: 0,
    text: "",
  });

  const fetchPost = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const postData = docSnap.data();
      setPostDetail({
        ...postDetail,
        comments: postData.comments,
        upvotes: postData.metadata.upvotes,
        downvotes: postData.metadata.downvotes,
        text: postData.text,
      });

      console.log(postData, postDetail);
    } else {
      navigate("/home");
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col items-center gap-4 ">
        <div className="border-black border rounded p-4 flex flex-col gap-4 w-2/5">
          <div className="border-black border rounded p-4 flex flex-row gap-4 items-center">
            <CgProfile size={36} />
            <div>User1</div>
          </div>
          <div className="border-black border rounded p-2 ">
            {postDetail.text}
          </div>

          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center">
              <button
                onClick={async () => {
                  const docRef = doc(db, "posts", id);
                  const updatedVotes = postDetail.upvotes + 1;
                  console.log(updatedVotes);
                  setPostDetail({ ...postDetail, upvotes: updatedVotes });

                  await updateDoc(docRef, {
                    "metadata.upvotes": updatedVotes,
                  });
                }}
              >
                <BiSolidUpvote size={24} />
              </button>
              <div>{postDetail.upvotes ? postDetail.upvotes : 0}</div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <button
                onClick={async () => {
                  const docRef = doc(db, "posts", id);
                  const updatedVotes = postDetail.downvotes + 1;
                  console.log(`updated downvote ${updatedVotes}`);
                  setPostDetail({ ...postDetail, downvotes: updatedVotes });

                  await updateDoc(docRef, {
                    "metadata.downvotes": updatedVotes,
                  });
                }}
              >
                <BiSolidDownvote size={24} />
              </button>
              <div>{postDetail.downvotes ? postDetail.downvotes : 0}</div>
            </div>
          </div>
        </div>

        <div className="border-black border rounded p-4 gap-2 flex flex-col w-2/5">
          <div className="border-black border rounded p-4 flex flex-row gap-4 items-center">
            <CgProfile size={36} />
            <input
              className="border-black border rounded p-2 w-full"
              type="text"
              name="name"
              placeholder="Add a comment"
            />
          </div>

          <button
            onClick={(e) => setShowReply(true)}
            className=" rounded p-2 w-20 bg-[#4a7999] text-white"
          >
            submit
          </button>
        </div>

        <div className="border-black border rounded p-4 w-2/5">
          <div className="text-2xl">Answered by others</div>
          <br />
          <div className="flex flex-col gap-4">
            <div className="border-black border rounded p-4 flex flex-row gap-4 items-center">
              <CgProfile size={36} />
              <div>User2</div>
            </div>
            <div className="border-black border rounded p-2 ">Answer</div>

            <div className="flex flex-row gap-4 items-center">
              <div className="flex flex-row gap-1">
                <button>
                  <BiSolidUpvote size={24} />
                </button>
                <div>14</div>
              </div>
              <div className="flex flex-row gap-1">
                <button>
                  <BiSolidDownvote size={24} />
                </button>
                <div>1</div>
              </div>
              <button className="bg-[#4a7999] text-white rounded p-2 w-20">
                Reply
              </button>
            </div>
            {showReply ? (
              <div className="pl-20 flex flex-col gap-4">
                <div className="border-black border rounded p-4 flex flex-row gap-4 items-center">
                  <CgProfile size={36} />
                  <div>User2</div>
                </div>
                <div className="border-black border rounded p-2 ">Answer</div>

                <div className="flex flex-row gap-6">
                  <div className="flex flex-row gap-2">
                    <button>
                      <BiSolidUpvote size={24} />
                    </button>
                    <div>14</div>
                  </div>
                  <button className="bg-[#4a7999] text-white rounded p-2 w-20">
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
