import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import BtnLogout from "../buttons/BtnLogout";
import { Suspense, lazy, useEffect, useState } from "react";
// import axios from "axios";

const UserPhotoProfile = lazy(() => import("../users/UserPhotoProfile"));

function Navbar() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    setUserName(decoded.userName);
    setUserId(decoded.id);
    setUserEmail(decoded.email);
  }, [userId]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-4 bg-slate-900 flex justify-between items-center shadow-md">
      <div>
        <Link
          to="/home"
          className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-red-400 to-pink-500 bg-clip-text text-transparent"
        >
          Example
        </Link>
      </div>

      <div className="flex gap-10 flex-row items-center">
        <div className="flex gap-7">
          <Link
            to="/home"
            className="nav-link after:content[''] after:block after:border-b-2 after:border-slate-400 after:transition after:duration-300 after:ease-in-out after:scale-x-0 hover:after:-scale-x-75"
          >
            Home
          </Link>
          <Link
            to="#"
            className="nav-link after:content[''] after:block after:border-b-2 after:border-slate-400 after:transition after:duration-300 after:ease-in-out after:scale-x-0 hover:after:-scale-x-75"
          >
            About
          </Link>
          <Link
            to="#"
            className="nav-link after:content[''] after:block after:border-b-2 after:border-slate-400 after:transition after:duration-300 after:ease-in-out after:scale-x-0 hover:after:-scale-x-75"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="nav-link after:content[''] after:block after:border-b-2 after:border-slate-400 after:transition after:duration-300 after:ease-in-out after:scale-x-0 hover:after:-scale-x-75"
          >
            Footer
          </Link>
        </div>
        <div className="">
          <div className="relative group">
            <div className="rounded-full overflow-hidden bg-slate-700 bg-opacity-0 hover:bg-opacity-30 transition duration-200 ease-linear">
              <Link to="/home/profile">
                <Suspense
                  fallback={
                    <div className="animate-pulse h-10 w-10 rounded-full bg-slate-300"></div>
                  }
                >
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <UserPhotoProfile />
                  </div>
                </Suspense>
              </Link>
            </div>
            <div className="absolute py-3 flex flex-col gap-3 px-5 bg-[#292929] shadow-md rounded right-3 scale-y-0 scale-x-0 origin-top-right transition-transform group-hover:scale-100">
              <h3 className="text-base font-medium">{userName}</h3>
              <h3 className="text-base font-medium">{userEmail}</h3>
              <BtnLogout />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
