import React from "react";
import ErrorNotification from "../notifications/ErrorNotification";
import { useSelector, useDispatch } from "react-redux";
import {
	handlePasswordChange,
	handleUsernameChange,
	handlePasswordConfirmationChange,
	reset,
	error,
} from "../../features/auth/signupSlice";
import { useSignupMutation } from "../../services/auth";
import { useNavigate, NavLink } from "react-router-dom";
import "./form.css";

const Signup = () => {
	const dispatch = useDispatch();
	const [signup] = useSignupMutation();
	const { fields, errorMessage } = useSelector((state) => state.signup);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (fields.password !== fields.passwordConfirmation) {
			dispatch(error("Password does not match confirmation."));
			return;
		}
		signup(fields);
		dispatch(reset());
		navigate("/");
	};
	return (
		<div className="bg-black w-screen h-screen flex justify-center items-center font-raleway">
			<div className="grid gap-8 justify-items-center">
				<div className="relative group">
					<div className="z-10 p-8 bg-neutral-900 rounded-lg glow">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div className="text-center">
								<h5 className="text-2xl font-medium text-gray-300 dark:text-white">Signup</h5>
							</div>
							{errorMessage && <ErrorNotification>{errorMessage}</ErrorNotification>}
							<div className="">
								<label
									htmlFor=""
									className="text-sm font-medium text-gray-300 block mb-2 cursor-override"
								>
									Username:
								</label>
								<input
									className="sm:text-sm rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5
                  bg-gray-600 border-gray-500 placeholder-gray-400 text-white cursor-override"
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
									className="text-sm font-medium text-gray-300 block mb-2 cursor-override"
								>
									Password:
								</label>
								<input
									className="sm:text-sm rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5
                  bg-gray-600 border-gray-500 placeholder-gray-400 text-white cursor-override"
									placeholder="password"
									type={`password`}
									id="login_password"
									value={fields.password}
									onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
								/>
							</div>
							<div>
								<label
									htmlFor=""
									className="text-sm font-medium text-gray-300 block mb-2 cursor-override"
								>
									Password Confirmation:
								</label>
								<input
									className="sm:text-sm rounded-lg focus:ring-[#e21f63] focus:border-[#e21f63] block w-full p-2.5
                  bg-gray-600 border-gray-500 placeholder-gray-400 text-white cursor-override"
									placeholder="password"
									type={`password`}
									id="Login__password"
									value={fields.passwordConfirmation}
									onChange={(e) => dispatch(handlePasswordConfirmationChange(e.target.value))}
								/>
							</div>
							<button
								type="submit"
								className="red-button w-full text-white opacity-80 hover:opacity-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-override"
								style={{
									backgroundColor: "#e21f63",
									color: "white",
								}}
							>
								Signup
							</button>
						</form>
						<div className="mt-8 text-center">
							<NavLink to="/account/login" className="text-lg text-white hover:underline cursor-override">
								Have an account? Login <span className="red-text">here.</span>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
