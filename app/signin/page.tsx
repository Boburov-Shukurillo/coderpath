"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signin logic here (send data to API, etc.)
    console.log(formData);
    // Redirect to the main page or dashboard after successful signin
    router.push("/dashboard"); // You can replace this with the actual route
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-black bg-opacity-80 rounded-lg p-8 w-full max-w-md shadow-lg">
        <h2 className="text-4xl text-white text-center mb-6 font-semibold">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-white block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-white block mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold transition-all hover:opacity-90"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-white">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-500 hover:text-indigo-400">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default page;
