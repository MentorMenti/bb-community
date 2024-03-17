import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";

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
        };
        const postRef = collection(db, "posts");
        const createdPost = await addDoc(postRef, postData);
        console.log(`Post created successfully with ID:`, createdPost.id);
        setPosts([postData, ...posts]);
        setNewPost("");
      } catch (error) {
        console.error("Error creating post:", error);
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
    <div className="max-h-dvh overflow-auto w-full md:w-[50%] flex flex-col gap-4 ">
      <form
        className="p-4 flex flex-col gap-4 border-black border rounded"
        onSubmit={handleCreatePost}
      >
        <div className="border-black border p-4 flex flex-row gap-4 items-center rounded">
          <div>
            <CgProfile size={36} />
          </div>
          <input
            // onClick={togglePop}
            className="border-black border rounded p-2 w-full"
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
          className="border-black border p-2 rounded"
        >
          Post
        </button>

        {seen ? (
          <Modal newPost={newPost} setNewPost={setNewPost} toggle={togglePop} />
        ) : null}
      </form>
      {posts ? console.log(posts) : 0}
      {posts?.map((post, key) => (
        <div
          className="border-black border p-4 flex flex-col gap-2 rounded"
          key={key}
        >
          <div className="border-black border-2 p-4 flex flex-row gap-4 rounded">
            <CgProfile size={36} />
            <div>{post.author}</div>
          </div>
          <div className="p-2">{post.text}</div>

          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <button>
                <BiSolidUpvote size={24} />
              </button>
              <div>{post.upvotes ? post.upvotes : 0}</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <button>
                <BiSolidDownvote size={24} />
              </button>
              <div>{post.downvotes ? post.downvotes : 0}</div>
            </div>
            <Link
              to={`/post/${post.id}`}
              className=" bg-[#4a7999] text-white p-2 text-center w-20 rounded font-semibold"
            >
              REPLY
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
