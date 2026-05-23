import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { loginUser } from "../api/authApi";

function Login() {
  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  // HANDLE CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // LOGIN
  const handleLogin =
    async (e) => {
      e.preventDefault();

      try {
        const res =
          await loginUser(
            formData
          );

        // SAVE USER
        localStorage.setItem(
          "userInfo",
          JSON.stringify(
            res.data
          )
        );

        toast.success(
          "Login Successful 🚀"
        );

        navigate("/");
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

      <div className="bg-[#111827] border border-slate-800 p-10 rounded-[35px] w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Login
        </h1>

        <form
          onSubmit={
            handleLogin
          }
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-semibold transition-all"
          >
            Login
          </button>

        </form>

        <p className="text-slate-400 mt-6 text-center">
          Don’t have an account?
          <span
            onClick={() =>
              navigate(
                "/register"
              )
            }
            className="text-cyan-400 cursor-pointer ml-2"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;