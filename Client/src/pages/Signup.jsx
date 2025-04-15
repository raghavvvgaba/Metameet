import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signup = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/signup", form);
      navigate("/signin");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <motion.form
        onSubmit={handleSignup}
        className="p-8 bg-gray-800 rounded-xl shadow-lg max-w-sm w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">Sign Up</h2>
        <p className="text-center text-gray-400 mb-6">Create your account to start</p>

        <motion.input
          name="username"
          placeholder="Email Address"
          className="mb-4 px-4 py-2 block w-full text-black bg-gray-200 border-2 border-gray-600 rounded-md focus:outline-none focus:border-purple-500 transition"
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />

        <motion.input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-2 block w-full text-black bg-gray-200 border-2 border-gray-600 rounded-md focus:outline-none focus:border-purple-500 transition"
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.05 }}
        />

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <motion.button
          type="submit"
          className="w-full py-2 bg-purple-600 rounded-md font-semibold text-white hover:bg-purple-700 transition"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Signup;
