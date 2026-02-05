import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { authDataContext } from "../Context/AuthContext";
import { userDataContext } from "../Context/Current_User";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Login from "./Login";

const Signup = ({ close }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const { serverUrl } = useContext(authDataContext);
  const { setUserData } = useContext(userDataContext);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        serverUrl + "/api/auth/signup",
        { name, email, password },
        { withCredentials: true },
      );

      setUserData(result.data);
      toast.success("Account created successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    close();
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50"
        onClick={handleClose}
      >
        <div
          className="bg-white rounded-2xl shadow-xl p-8 w-[320px] md:w-[350px] h-[480px] max-w-md relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-3 right-4 text-xl text-gray-500"
            onClick={handleClose}
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold text-center mb-6">
            <span className="text-[#5f6fff]">Create</span>{" "}
            <span className="text-gray-800">Account</span>
          </h2>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4fbf8b]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4fbf8b]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4fbf8b]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-3 bottom-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="text-[#5f6fff] hover:underline cursor-pointer"
                onClick={() => {
                  handleClose();
                  setOpenLogin(true);
                }}
              >
                click here
              </span>
            </p>

            <button
              type="submit"
              className="w-full bg-[#5f6fff] text-white font-medium py-2 rounded-md"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {openLogin && <Login close={() => setOpenLogin(false)} />}
    </div>
  );
};

export default Signup;
