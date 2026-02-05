import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import { userDataContext } from "../Context/Current_User";

function Nav() {
  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { userData, setUserData } = useContext(userDataContext);

  const handleLogout = () => {
    setUserData(null);      // clear user
    setShowProfile(false); // close dropdown
    navigate("/");
  };

  return (
    <div className="w-full h-[12vh] flex flex-col items-center justify-center relative">
      <div className="w-[90%] h-full flex items-center justify-between">
        <div className="w-[200px] cursor-pointer" onClick={() => navigate("/")}>
          <img src={assets.logo} alt="logo" className="w-full h-full" />
        </div>

        <div className="flex items-center justify-center">
          <ul className="flex items-center justify-center gap-8 font-medium">
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/doctors")}>
              All Doctors
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/about")}>
              About
            </li>
            <li className="cursor-pointer" onClick={() => navigate("/contact")}>
              Contact
            </li>
            <button className="border w-28 h-8 text-sm rounded-full">
              Admin panel
            </button>
          </ul>
        </div>

        <div className="relative">
          {!userData && (
            <button
              onClick={() => setOpenLogin(true)}
              className="w-32 h-10 text-sm bg-[#5f6fff] rounded-full text-white"
            >
              Create account
            </button>
          )}

          {userData && (
            <>
              {/* Profile Icon */}
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="w-10 h-10 rounded-full overflow-hidden"
              >
                <img
                  src={assets.profile_icon}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Dropdown */}
              {showProfile && (
                <div className="absolute right-0 top-12 w-36 bg-white shadow-lg rounded-md border">
                  <ul className="flex flex-col text-sm">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate("/profile");
                        setShowProfile(false);
                      }}
                    >
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <hr className="w-[90%] border-1 border-gray-500" />

      {openLogin && <Login close={() => setOpenLogin(false)} />}
    </div>
  );
}

export default Nav;
