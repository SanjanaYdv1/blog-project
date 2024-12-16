import React, { useState, useEffect } from "react";
import { fetchBlogs } from "../services/api";
import { useLocation, Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const search = new URLSearchParams(useLocation().search);
  const categoryId = search.get("category");

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data));
  }, [categoryId]);

  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog?.id}>
            <Link to={`/blog/${blog?.id}`}>{blog?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
