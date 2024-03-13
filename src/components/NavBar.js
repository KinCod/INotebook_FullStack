import React, {  useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//useLocation hook is provided by router and gives location of page jismai hum haiiiiiiii (exact Path)

const NavBar = (props) => {
  const navigate = useNavigate();

  const user= localStorage.getItem('name');

  const DelToken = () =>{
    props.showAlert(user + " Logged Out Successfully!!","lime");
    localStorage.clear();
    navigate('/login');
  }

  //This is used to define if ​‌‍‌⁡⁢⁣⁣𝗟𝗼𝗴𝗶𝗻 𝗦𝗶𝗴𝗻𝗨𝗽 𝗯𝘂𝘁𝘁𝗼𝗻 𝗿𝗵𝗲𝗴𝗮⁡​ ya phir ⁡⁢⁣⁣​‌‍‌‍𝗡𝗮𝗺𝗲 𝗮𝗻𝗱 𝗟𝗼𝗴𝗼𝘂𝘁​⁡
  const token = localStorage.getItem("token");

  //we will use useEffect jo harr baari run hoga jaise hi location will change
  let location = useLocation(); //return an object and ismai path name element hoga which gives path so using that
  //we will set active statee
  useEffect(() => {
    //console.log(location.pathname)        //using this in the navbar component places
  }, [location]);

  return (
    <>
      <nav className="bg-[rgb(190,219,227)]  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="main.png"
              className="my-0 h-14 hover:scale-125 transition-all duration-300"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              iNoteBook
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/*Agar token hoga tab Logout button vrna login */}
            {!token ? (
              <div className="flex space-x-3">
                <Link
                  type="button"
                  to="/login"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </Link>
                <Link
                  type="button"
                  to="/signup"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
                <div className="flex  space-x-3 ">
                  <div
                    className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {user}
                  </div>
                  {/*Ispe click hokar signout method runhoga */}
                  <Link         
                    type="button" 
                    to="/signup"
                    onClick={DelToken}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign out
                  </Link>
                </div>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[rgb(190,219,227)] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[rgb(190,219,227)] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 hover:scale-125  transition-all duration-200 ${
                    location.pathname === "/"
                      ? "text-blue-700"
                      : "text-white hover:text-blue-700"
                  }  rounded md:bg-transparent md:p-0 `}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 hover:scale-125 transition-all duration-200 ${
                    location.pathname === "/about"
                      ? "text-blue-700 "
                      : "text-white hover:text-blue-700"
                  } md:p-0 `}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#/"
                  className="block py-2 px-3 hover:scale-125 transition-all duration-200 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  className="block py-2 px-3 hover:scale-125 transition-all duration-200 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
