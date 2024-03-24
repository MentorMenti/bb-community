import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { db } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FaReply } from "react-icons/fa";

const Post = () => {
  const [showReply, setShowReply] = useState(false);
  const [newComment, setnewComment] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const [postDetail, setPostDetail] = useState({
    comments: [],
    upvotes: 0,
    downvotes: 0,
    text: "",
  });

  const addComment = async () => {
    const docRef = doc(db, "posts", id);
    // setPostDetail({ ...postDetail, downvotes: updatedVotes });
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());

    var updatedComment = docSnap.data().comment;
    updatedComment = updatedComment
      ? [...updatedComment, newComment]
      : [newComment];
    // console.log(updatedComment);

    await updateDoc(docRef, {
      comment: updatedComment,
    });
  };

  const fetchPost = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const postData = docSnap.data();
      const result = {
        ...postDetail,
        comments: postData.comment,
        upvotes: postData.metadata.upvotes,
        downvotes: postData.metadata.downvotes,
        text: postData.text,
      };
      setPostDetail(result);

      // console.log(postData, postDetail);
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
      <div className="flex flex-col items-center gap-4 m-4">
        <div className="border-black border rounded p-4 flex flex-col gap-4 w-2/5">
          <div className="flex flex-row gap-4 items-center">
            <CgProfile size={36} />
            <div className="items-center">
              <div>
                {postDetail.author ? postDetail.author : "Anonymous"} &nbsp;
                <div className="h-[5px] w-[5px] bg-[#bbb] inline-block rounded-[50%]"></div>{" "}
                (Time)
              </div>
              <div className="text-xs">Category</div>
            </div>
          </div>
          <div className="border-black rounded ">{postDetail.text}</div>
          {/* <hr class="rounded-md mb-3" /> */}

          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-1 items-center border-black border rounded p-1">
              <button
                onClick={async () => {
                  const docRef = doc(db, "posts", id);
                  const updatedVotes = postDetail.upvotes + 1;
                  // console.log(updatedVotes);
                  setPostDetail({ ...postDetail, upvotes: updatedVotes });

                  await updateDoc(docRef, {
                    "metadata.upvotes": updatedVotes,
                  });
                }}
              >
                <BiSolidUpvote color="#4a7999" size={18} />
              </button>
              <div>{postDetail.upvotes ? postDetail.upvotes : 0}</div>
            </div>
            <div className="flex flex-row gap-1 items-center border-black border rounded p-1">
              <button
                onClick={async () => {
                  const docRef = doc(db, "posts", id);
                  const updatedVotes = postDetail.downvotes + 1;
                  // console.log(`updated downvote ${updatedVotes}`);
                  setPostDetail({ ...postDetail, downvotes: updatedVotes });

                  await updateDoc(docRef, {
                    "metadata.downvotes": updatedVotes,
                  });
                }}
              >
                <BiSolidDownvote color="#4a7999" size={18} />
              </button>
              <div>{postDetail.downvotes ? postDetail.downvotes : 0}</div>
            </div>
          </div>
        </div>

        <div className="border-black border rounded p-4 gap-2 flex flex-col w-2/5">
          <div className="border-black border rounded p-4 flex flex-row gap-4 items-center">
            <CgProfile size={36} />
            <input
              onChange={(e) => {
                const value = e.target.value;
                setnewComment(value);
                // console.log(newComment);
              }}
              className="border-black border rounded p-2 w-full"
              type="text"
              name="name"
              placeholder="Add a comment"
            />
          </div>

          <button
            onClick={(e) => {
              setShowReply(true);
              addComment();
            }}
            className=" rounded p-2 w-20 bg-[#4a7999] text-white"
          >
            submit
          </button>
        </div>

        <div className="border-black border rounded p-4 gap-4 w-2/5">
          <div className="text-2xl">Answered by others</div>
          <br />

          <div className="flex flex-col gap-6">
            {postDetail.comments
              ? postDetail.comments.map((post, key) => {
                  return (
                    <div
                      key={key}
                      className="border-black border p-4 rounded flex flex-col gap-4 "
                    >
                      <div className="border-black flex flex-row gap-4 items-center">
                        <CgProfile size={36} />
                        <div>User2</div>
                      </div>
                      <div className="border-black ">{post}</div>

                      <div className=" flex flex-row gap-4 items-center justify-between">
                        <div className="flex flex-row gap-4">
                          <div className="border-black border rounded p-1 items-center flex flex-row gap-1">
                            <button>
                              <BiSolidUpvote color="#4a7999" size={18} />
                            </button>
                            <div>14</div>
                          </div>
                          <div className="border-black border rounded p-1 flex flex-row items-center gap-1">
                            <button>
                              <BiSolidDownvote color="#4a7999" size={18} />
                            </button>
                            <div>1</div>
                          </div>
                        </div>
                        <button className="bg-[#4a7999] text-white py-1 text-center flex gap-1 justify-center items-center w-20 rounded font-semibold">
                          <FaReply color="white" size={14} /> Reply
                        </button>
                      </div>
                      {/* {showReply ? (
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
            ) : null} */}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Post;
