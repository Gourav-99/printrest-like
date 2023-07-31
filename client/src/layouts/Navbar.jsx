import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/auth";
import { useContext } from "react";

import { SearchContext } from "../components/contexts/SearchContext";
const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const { setSearch } = useContext(SearchContext);

  return (
    <nav
      className="sticky top-0 z-[100] flex w-full flex-nowrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref=""
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <button
          className="block border-0 bg-transparent py-2 px-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-te-collapse-init=""
          data-te-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-6">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
          </span>
        </button>
        <div
          className="flex justify-between items-center w-[80%]"
          id="navbarSupportedContent"
          data-te-collapse-item=""
        >
          <Link
            className="mt-2 mr-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mt-0"
            to="/"
          >
            <img
              src="https://upcdn.io/W142i6B/raw/uploads/prismic-icon-svgrepo-com.png"
              alt=""
              loading="lazy"
              className="w-10"
            />
            <h1 className="mx-2 text-transparent text-3xl font-bold bg-clip-text bg-gradient-to-r to-pink-600 from-yellow-400">
              PinCraft
            </h1>
          </Link>
          {/* Left links */}

          <div className="basis-[60%] ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required=""
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </div>
          </div>

          {/* Left links */}
        </div>

        <div className="relative flex items-center ">
          {/* Icon */}
          {auth.loaded && auth.token ? (
            <>
              <div className="create-post-icon mx-2">
                <Link to="/create-post">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24.00 24.00"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1C274C"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#1C274C"
                      strokeWidth="0.5"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect x={0} fill="none" width={24} height={24} />{" "}
                      <g>
                        {" "}
                        <path d="M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z" />{" "}
                        <path d="M21 7h-4V3h-2v4h-4v2h4v4h2V9h4" />{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="relative" data-te-dropdown-ref="">
                <Link
                  className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  to="/"
                  id="dropdownMenuButton2"
                  role="button"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                >
                  <span className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <span className="text-white font-medium uppercase">
                      {auth.user.initials}
                    </span>
                  </span>
                </Link>
              </div>
              <div className="logout-btn mx-2">
                <svg
                  onClick={handleLogout}
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />{" "}
                  </g>
                </svg>
              </div>
            </>
          ) : (
            <>
              <Link
                className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700"
                to="/login"
              >
                Login
              </Link>
              <div className="relative" data-te-dropdown-ref="">
                <Link
                  className="hidden-arrow mr-4 flex items-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700"
                  to="/signup"
                  id="dropdownMenuButton1"
                  role="button"
                  data-te-dropdown-toggle-ref=""
                  aria-expanded="false"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
