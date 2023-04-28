import React from "react";
import { NavLink } from "react-router-dom";
import "./logout.css";

const Logout = () => {
	return (
		<>
			<div className="bg-black w-100 h-screen flex justify-center items-center font-raleway">
				<div className="grid gap-8 items-start justify-center">
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-200 tilt"></div>
						<div className="relative px-7 py-4 bg-black rounded-lg leading-none flex flex-col items-center divide-y divide-gray-300">
							<h1 className="text-gray-300 text-center pb-4 text-2xl group-hover:text-gray-100">
								You've been successfully logged out. <span className="wave">👋</span>
							</h1>
							<h1 className="text-gray-300 text-center pt-3 text-2xl group-hover:text-gray-100">
								Click{" "}
								<span className="text-indigo-400">
									<NavLink to="../login">here</NavLink>
								</span>{" "}
								to join the vibes again!
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logout;
