import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  reset,
} from "../../features/auth/loginSlice";
import { useLoginMutation } from "../../services/auth";
import { useNavigate, NavLink } from "react-router-dom";
import "./form.css";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { fields } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log({ fields });
    login(fields);
    dispatch(reset());
    navigate('/')
  };
  return (
    <div className="bg-neutral-800 w-screen h-screen flex justify-center items-center">
      <div className="grid gap-8 justify-items-center">
      {/* <div
        className="w-96 h-full mt-8 bg-white shadow-md border border-gray-200
      rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      > */}
        <div className="relative group">
          <div className="z-10 p-8 bg-neutral-900 rounded-lg glow">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="text-center">
                <h5 className="text-2xl font-medium text-gray-900 dark:text-white">
                  Login
                </h5>
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Username:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                    rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5
                    dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="username"
                  type={`text`}
                  id="login_username"
                  value={fields.username}
                  onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Password:
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                  rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5
                  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="password"
                  type={`password`}
                  id="Login__password"
                  value={fields.password}
                  onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="red-button w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
            </form>
            <div className="mt-8 text-center">
              <NavLink to="/account/signup" className="text-lg text-white hover:underline">
                Don't have an account? Join the Vibes <span className="red-text">here.</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
