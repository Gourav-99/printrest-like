import axios from "../../utils/axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const handleResetPass = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirmPass) {
        toast.error("password doesn't match");
      }
      const res = await axios.post(`/auth/reset-password/${token}`, {
        password,
      });
      toast.success(res.message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-neutral-200 dark:bg-neutral-700 py-6">
      <div className="container h-full px-6 m-auto py-5">
        <div className="g-6 flex h-full flex-wrap items-center justify-center">
          <div className="shrink-0 grow-0 basis-auto lg:w-full xl:w-11/12">
            <div className="block rounded-lg bg-white text-neutral-800 shadow-2xl dark:bg-neutral-800 dark:text-white">
              <div className="p-6 md:p-12">
                <div className="flex flex-wrap justify-center">
                  <div className="hidden lg:flex shrink-0 grow-0 basis-auto items-center md:w-10/12  lg:w-6/12 xl:w-7/12">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.png"
                      className=""
                      alt="Sample"
                    />
                  </div>
                  <div className=" shrink-0 grow-0 basis-auto md:w-10/12 lg: lg:w-6/12 xl:w-5/12">
                    <p className="mx-1 mb-12 mt-6 text-center text-yellow-500  text-3xl font-bold md:mx-6">
                      Reset password
                    </p>
                    <form onSubmit={handleResetPass} className="mx-1 md:mx-6">
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
                            placeholder="Confirm password"
                            required
                            onChange={(e) =>
                              setConfirmPass(e.currentTarget.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="mx-6 mb-4 flex justify-center lg:mb-6">
                        <button
                          type="submit"
                          className="inline-block rounded bg-yellow-500 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                          data-te-ripple-init=""
                          data-te-ripple-color="light"
                        >
                          Reset Password
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
export default ResetPassword;
