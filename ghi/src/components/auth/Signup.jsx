import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
//  handlePasswordConfirmationChange,
  reset,
} from "../../features/auth/signupSlice";
import { useSignupMutation } from "../../services/auth";

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const { fields } = useSelector((state) => state.signup);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log({ fields });
    signup(fields);
    dispatch(reset());
  };
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="bg-white shadow-md border border-gray-200
      rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Signup
          </h5>
          <div className="">
            <label
              htmlFor=""
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Username:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
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
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="password"
              type={`password`}
              id="login_password"
              value={fields.password}
              onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
            />
          </div>
          {/* <div>
            <label
              htmlFor=""
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Password Confirmation:
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="password"
              type={`password`}
              id="Login__password"
              value={fields.passwordConfirmation}
              onChange={(e) => dispatch(handlePasswordConfirmationChange(e.target.value))}
            />
          </div> */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
