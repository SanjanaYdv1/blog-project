import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchBlogs = async () => {
  const response = await api.get("/blogs/");
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get("/categories/");
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await api.post("login/", { username, password });
  return response.data;
};

// Add other API calls (like adding a blog, commenting, etc.)
