import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { userDataContext } from "../Context/Current_User";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Signup from "./Signup";
const Login = ({ close }) => {
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let { userData, setUserData } = useContext(userDataContext);
  let [showPassword, setShowPassword] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true },
      );
      setUserData(result.data);
      navigate("/");

      toast.success("Login successful");
      close();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Invalid credentials";

      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[320px] md:w-[350px] h-[400px] max-w-md relative">
          <button
            className="absolute top-3 right-4 text-xl text-gray-500"
            onClick={close}
          >
            ×
          </button>

          <h2 className="text-2xl font-semibold text-center mb-6">
            <span className="text-[#5f6fff]">User</span>{" "}
            <span className="text-gray-800">Login</span>
          </h2>

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                placeholder="type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4fbf8b]"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className=" relative">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="type here"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#4fbf8b]"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <span
                className=" absolute right-3 bottom-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              Create an account?{" "}
              <span
                className="text-[#5f6fff] hover:underline cursor-pointer"
                onClick={() => setOpenSignup(true)}
              >
                click here
              </span>
            </p>

            <button
              type="submit"
              className="w-full bg-[#5f6fff] text-white font-medium py-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      {openSignup && <Signup close={() => setOpenSignup(false)} />}
    </div>
  );
};

export default Login;
