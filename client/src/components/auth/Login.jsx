import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
import withAuth from "../../hoc/withAuth";
import axios from "../../utils/axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleOauth = () => {
    window.open("http://43.205.243.129:8080/oauth/google", "_self");
  };
  return (
    <section className="bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full px-6 m-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2">
          <div className="col-span-1 lg:col-span-2">
            <div className="block rounded-lg bg-white text-neutral-800 shadow-2xl dark:bg-neutral-800 dark:text-white">
              <div className="p-6 md:p-12">
                <div className="flex flex-wrap justify-center">
                  <div className=" flex shrink-0 grow-0 basis-auto items-center  md:w-10/12  lg:w-6/12 xl:w-7/12">
                    <div className="hidden lg:block col-span-1 lg:col-span-2 flex items-center justify-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.png"
                        alt="Sample"
                        className="mx-auto max-w-full"
                      />
                    </div>
                  </div>
                  <div className=" shrink-0 grow-0 basis-auto md:w-10/12 lg: lg:w-6/12 xl:w-5/12">
                    <form onSubmit={handleSubmit} className="mx-1 md:mx-6">
                      <div className="flex flex-col items-center justify-center lg:justify-start">
                        <p className="mb-0 mr-4 text-lg dark:text-white">
                          Sign in with
                        </p>
                        <div>
                          <button
                            onClick={handleGoogleOauth}
                            type="button"
                            data-te-ripple-init=""
                            data-te-ripple-color="light"
                            className="mx-1 inline-block rounded-full bg-primary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          >
                            {/* Google */}
                            <svg
                              width="32px"
                              height="32px"
                              viewBox="-0.5 0 48 48"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>Google-color</title>{" "}
                                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                                <g
                                  id="Icons"
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  {" "}
                                  <g
                                    id="Color-"
                                    transform="translate(-401.000000, -860.000000)"
                                  >
                                    {" "}
                                    <g
                                      id="Google"
                                      transform="translate(401.000000, 860.000000)"
                                    >
                                      {" "}
                                      <path
                                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                        id="Fill-1"
                                        fill="#FBBC05"
                                      >
                                        {" "}
                                      </path>{" "}
                                      <path
                                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                        id="Fill-2"
                                        fill="#EB4335"
                                      >
                                        {" "}
                                      </path>{" "}
                                      <path
                                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                        id="Fill-3"
                                        fill="#34A853"
                                      >
                                        {" "}
                                      </path>{" "}
                                      <path
                                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                        id="Fill-4"
                                        fill="#4285F4"
                                      >
                                        {" "}
                                      </path>{" "}
                                    </g>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </button>
                          <button
                            type="button"
                            data-te-ripple-init=""
                            data-te-ripple-color="light"
                            className="mx-1 inline-block rounded-full bg-primary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          >
                            {/* Twitter */}
                            <svg
                              width="32px"
                              height="32px"
                              viewBox="0 -4 48 48"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>Twitter-color</title>{" "}
                                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                                <g
                                  id="Icons"
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  {" "}
                                  <g
                                    id="Color-"
                                    transform="translate(-300.000000, -164.000000)"
                                    fill="#00AAEC"
                                  >
                                    {" "}
                                    <path
                                      d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                                      id="Twitter"
                                    >
                                      {" "}
                                    </path>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </button>
                          <button
                            type="button"
                            data-te-ripple-init=""
                            data-te-ripple-color="light"
                            className="mx-1 inline-block rounded-full bg-primary p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          >
                            {/* GitHub */}
                            <svg
                              width="32px"
                              height="32px"
                              viewBox="0 0 20 20"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>github [#142]</title>{" "}
                                <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  {" "}
                                  <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-140.000000, -7559.000000)"
                                    fill="#000000"
                                  >
                                    {" "}
                                    <g
                                      id="icons"
                                      transform="translate(56.000000, 160.000000)"
                                    >
                                      {" "}
                                      <path
                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                        id="github-[#142]"
                                      >
                                        {" "}
                                      </path>{" "}
                                    </g>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                          Or
                        </p>
                      </div>
                      <div className="mb-6 flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="mr-3 h-5 w-5 text-yellow-500"
                        >
                          <path
                            fill="currentColor"
                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                          />
                        </svg>
                        <div className="flex-auto">
                          <input
                            type="email"
                            className="m-0 block w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 transition ease-in-out focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Your Email"
                            required
                            onChange={(e) => setEmail(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-6 flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="mr-3 h-5 w-5 text-yellow-500"
                        >
                          <path
                            fill="currentColor"
                            d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                          />
                        </svg>
                        <div className="flex-auto">
                          <input
                            type="password"
                            className="m-0 block w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 transition ease-in-out focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Password"
                            required
                            onChange={(e) => setPassword(e.currentTarget.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-6 flex items-center justify-between">
                        <div></div>
                        <Link
                          to="/forgot-password"
                          className="text-neutral-800 dark:text-white hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="mx-6 mb-4 flex justify-center lg:mb-6">
                        <button
                          type="submit"
                          className="inline-block rounded bg-yellow-500 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          data-te-ripple-init=""
                          data-te-ripple-color="light"
                        >
                          Login
                        </button>
                      </div>
                      <div className="mb-6">
                        <p class="mt-2 mb-0 pt-1 text-sm font-semibold dark:text-white">
                          Don't have an account?
                          <Link
                            to="/signup"
                            class="text-red-600 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                          >
                            Register
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default withAuth(Login);
