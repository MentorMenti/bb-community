import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";

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
    <div className="max-h-dvh overflow-auto w-full md:w-[50%] flex flex-col gap-4 border-black border">
      <form className="p-4 flex flex-col gap-4" onSubmit={handleCreatePost}>
        <div className="border-black border-2 p-4 flex flex-row gap-4">
          <div>
            <CgProfile size={24} />
          </div>
          <input
            className="border-black border-2 p-1 w-full"
            type="text"
            name="name"
            placeholder="Enter your question"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            required
          />
        </div>

        <button
          onClick={togglePop}
          type="submit"
          className="border-black border-2 p-2"
        >
          Post
        </button>

        {seen ? <Modal toggle={togglePop} /> : null}
      </form>
      {posts?.map((post, key) => (
        <div className="border-black border p-4 flex flex-col gap-4" key={key}>
          <div className="border-black border-2 p-4 flex flex-row gap-4">
            <CgProfile size={24} />
            <div>{post.author}</div>
          </div>
          <div className="p-2">{post.text}</div>
          <Link
            to={`/post/${post.id}`}
            className="border-black border-2 p-2 text-center w-20"
          >
            Reply
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
