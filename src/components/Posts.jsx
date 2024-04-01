import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { FaReply } from "react-icons/fa";
const Posts = () => {
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }

  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [user] = useAuthState(auth);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const createPost = async () => {
      try {
        const postData = {
          text: newPost,
          timestamp: new Date(),
          comments: [],
          uid: user.uid,
          metadata: {
            upvotes: 0,
            downvotes: 0,
          },
        };
        const postRef = collection(db, "posts");
        const createdPost = await addDoc(postRef, postData);
        console.log(`Post created successfully with ID:`, createdPost.id);
        setPosts([postData, ...posts]);
        setNewPost("");
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Error creating post: ", error.message);
      }
    };

    createPost();
  };

  useEffect(() => {
    const fetchData = async () => {
      const postsRef = collection(db, "posts");
      const snapshot = await getDocs(postsRef);
      const postData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPosts(postData);
    };

    fetchData();
  }, []);

  return (
    <div className=" overflow-auto w-full md:w-[50%] flex flex-col gap-4  ">
      <form
        className="p-4 flex flex-col gap-4 border bg-white border-solid  rounded-lg"
        onSubmit={handleCreatePost}
      >
        <div className="border-solid  flex flex-row gap-4 items-center rounded-lg">
          <div>
            <CgProfile size={36} />
          </div>
          <input
            // onClick={togglePop}
            className=" border-solid  border rounded-md p-2 w-full"
            type="text"
            name="name"
            placeholder="Enter your question"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            required
          />
        </div>

        <button
          // onClick={togglePop}
          type="submit"
          className="border-solid text-white font-semibold bg-[#4a7999] border p-2 rounded-md"
        >
          Post
        </button>

        {seen ? (
          <Modal newPost={newPost} setNewPost={setNewPost} toggle={togglePop} />
        ) : null}
      </form>
      <hr class="rounded-lg " />

      {posts ? console.log(posts) : 0}
      {posts?.map((post, key) => (
        <div
          className=" bg-white border-solid border p-4 flex flex-col gap-2 rounded-lg"
          key={key}
        >
          <div className=" flex flex-row gap-4 items-center">
            <CgProfile size={36} />
            <div className="items-center">
              <div>
                {post.author ? post.author : "Anonymous"} &nbsp;
                <div className="h-[5px] w-[5px] bg-[#bbb] inline-block rounded-[50%]"></div>{" "}
                (Time)
              </div>
              <div className="text-xs">Category</div>
            </div>
          </div>
          <div className="">{post.text}</div>

          <hr class="rounded-lg mb-3" />

          <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-row gap-4">
              <div className="flex flex-row gap-1 items-center border rounded-md p-1">
                <button
                  onClick={async () => {
                    const docRef = doc(db, "posts", post.id);
                    const docSnap = await getDoc(docRef);
                    const postData = docSnap.data();

                    const updatedVotes = postData.metadata.upvotes + 1;

                    console.log(
                      ` intial upvotes ${postData.metadata.upvotes} updated downvote ${updatedVotes}`
                    );

                    await updateDoc(docRef, {
                      "metadata.upvotes": updatedVotes,
                    });
                  }}
                >
                  <BiSolidUpvote color="#4a7999" size={18} />
                </button>
                <div>{post.metadata.upvotes ? post.metadata.upvotes : 0}</div>
              </div>
              <div className="flex flex-row gap-1 items-center  border rounded-md p-1 ">
                <button
                  onClick={async () => {
                    const docRef = doc(db, "posts", post.id);
                    const docSnap = await getDoc(docRef);
                    const postData = docSnap.data();

                    const updatedVotes = postData.metadata.downvotes + 1;

                    console.log(
                      ` intial downvotes ${postData.metadata.downvotes} updated downvote ${updatedVotes}`
                    );

                    await updateDoc(docRef, {
                      "metadata.downvotes": updatedVotes,
                    });
                  }}
                >
                  <BiSolidDownvote color="#4a7999" size={18} />
                </button>
                <div>
                  {post.metadata.downvotes ? post.metadata.downvotes : 0}
                </div>
              </div>
            </div>

            <Link
              to={`/post/${post.id}`}
              className=" bg-[#4a7999] text-white py-1 text-center flex gap-1 justify-center items-center w-20 rounded-md font-semibold"
            >
              <FaReply color="white" size={14} /> Reply
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
