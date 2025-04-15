import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/signin", form);
      localStorage.setItem("metameet-user", JSON.stringify(res.data.user));
      navigate("/room");
    } catch (err) {
      setError(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <form onSubmit={handleSignin} className="p-8 bg-gray-800 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          name="username"
          placeholder="Username"
          className="mb-2 px-3 py-2 block w-full text-black"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 px-3 py-2 block w-full text-black"
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
