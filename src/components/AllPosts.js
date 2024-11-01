import axios from "axios";
import { useEffect, useState } from "react";
import "./AllPosts.css";

const AllPosts = () => {
  const [allPosts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/e2c2cac6759448ad86e8766a49db55e9/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div id="blogs">
      {allPosts.map((post) => (
        <div className="blog">
          <p>{post.title}</p>
          <p>{post.author}</p>
          <p>{post.datetime}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
