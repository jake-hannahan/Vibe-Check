import "./form.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handlePasswordChange, handleUsernameChange, reset } from "../../features/auth/loginSlice";
import { useLoginMutation } from "../../services/auth";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const [login] = useLoginMutation();
	const { fields } = useSelector((state) => state.login);
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		login(fields);
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
								<h5 className="text-2xl font-medium text-white">Check In</h5>
							</div>
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
									id="Login__password"
									value={fields.password}
									onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
								/>
							</div>
							<button
								type="submit"
								className="w-full text-white font-medium rounded-lg opacity-80 hover:opacity-100 text-sm px-5 py-2.5 text-center cursor-override"
								style={{
									backgroundColor: "#e21f63",
									color: "white",
								}}
							>
								Check In
							</button>
						</form>
						<div className="mt-8 text-center">
							<NavLink
								to="/account/signup"
								className="text-lg text-white hover:underline hover:underline-offset-8 cursor-override"
							>
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
