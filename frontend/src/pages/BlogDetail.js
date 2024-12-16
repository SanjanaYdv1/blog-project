import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogs } from "../services/api";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams(); // Get blog ID from URL

  useEffect(() => {
    fetchBlogs().then((data) => {
      const selectedBlog = data.find((b) => b.id === parseInt(id));
      setBlog(selectedBlog);
    });
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Category: {blog.category.name}</p>
      <p>Author: {blog.author.username}</p>
    </div>
  );
};

export default BlogDetail;
