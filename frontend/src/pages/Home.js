import Base from '../components/Base';
import React, { useState, useEffect } from "react";
import { fetchBlogs, fetchCategories } from "../services/api";
import { Link } from "react-router-dom";

const Home = () => {
  const homeContainerStyle = {
    backgroundImage: "url('https://img.freepik.com/free-vector/data-protection-background-vector-cyber-security-technology-purple-tone_53876-136341.jpg?semt=ais_hybrid')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: 'white',
    padding: '2rem',
  };

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchBlogs().then((data) => setBlogs(data));
    fetchCategories().then((data) => setCategories(data));
  }, []);

  return (
    <Base>
    <div>
      <div style={homeContainerStyle}>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-2">Welcome to Our Blog</h1>
          <h3 className="text-2xl mb-4">Your daily dose of insights and stories</h3>
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 m-4"
          />
        </div>
      </div>
      <h1>Welcome to the Blog</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/blogs?category=${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Latest Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </Base>
  );
}

export default Home;