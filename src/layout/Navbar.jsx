/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import DrawerRoute from "./DrawerRoute";

import useAuth from "../hooks/useAuth.jsx";
import logo from "/vite.svg";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => console.log("You logged out successfully"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <header className=" py-3  border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 ">
        <div className=" flex items-center justify-between  h-16 ">
          <div className="flex justify-start items-center">
            <DrawerRoute></DrawerRoute>
            <div className="">
              <Link className="justify-center items-center flex gap-2" to="/">
                {" "}
                <img className="w-8 hidden md:block" src={logo} alt="" />
                <h1 className="italic text-yellow-400">Tasker</h1>
              </Link>
            </div>
          </div>

          <div className=" flex items-center  justify-end gap-2  ">
            {user ? (
              <>
                <div className="">
                  <h1 className="italic text-yellow-400">
                    Hi, {user?.displayName ? user?.displayName : "User"}
                  </h1>
                </div>
                <div className="dropdown  dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        className="rounded-full w-7 lg:w-14"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 border border-[rgba(206,206,206,0.12)] bg-[#1D212B]"
                  >
                    <li>
                      {" "}
                      <p
                        className="font-semibold hover:underline"
                        onClick={handleLogOut}
                      >
                        Log Out
                      </p>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className=" rounded-full lg:px-10 p-1 font-semibold lg:text-xl bg-[#1D212B] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className=" rounded-full lg:px-10 p-1 font-semibold lg:text-xl bg-[#1D212B] hover:bg-[#0360D9] text-[#0360D9] hover:text-white border-2 border-[#0360D9]"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
