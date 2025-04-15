import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-800 via-black to-indigo-900 text-white text-center px-6">
      <div>
        <h1 className="text-5xl font-bold mb-4">MetaMeet</h1>
        <p className="text-xl mb-8">
          Step into the 2D Metaverse – a new way to interact, learn, and collaborate.
        </p>
        <button
          onClick={() => navigate("/room")}
          className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          🚪 Enter Room
        </button>
      </div>
    </div>
  );
};

export default Landing;
