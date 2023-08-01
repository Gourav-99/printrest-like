import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/auth";
import withAuth from "../../hoc/withAuth";
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
                    <p className="mx-1 mb-12 mt-6 text-center text-yellow-500  text-3xl font-bold md:mx-6">
                      Login
                    </p>
                    <form onSubmit={handleSubmit} className="mx-1 md:mx-6">
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
