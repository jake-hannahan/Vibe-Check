import React from "react";
import { NavLink } from "react-router-dom";
import "./logout.css";
import "../../App.css";
import Footer from "../cards/Footer";

const Logout = () => {
	return (
		<>
			<div className="w-full h-[calc(4.5rem)]"></div>
			<div className="bg-neutral-900 w-full h-[calc(100vh-4.5rem)] flex justify-center items-center font-raleway">
				<div className="grid gap-8 items-start justify-center">
					<div className="relative group">
						<div className="absolute -inset-0.5 bg-[#e21f63] rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition duration-200 tilt"></div>
						<div className="relative px-7 py-7 bg-black rounded-lg leading-none flex flex-col items-center divide-y divide-gray-300">
							<h1 className="text-gray-300 text-center pb-4 text-4xl group-hover:text-gray-100">
								You've successfully checked out. <span className="wave">👋</span>
							</h1>
							<h1 className="text-gray-300 text-center pt-3 text-4xl group-hover:text-gray-100">
								Click{" "}
								<span className="text-[#eb4d84] opacity-75 group-hover:opacity-100 ">
									<NavLink
										className="cursor-override hover:underline hover:underline-offset-8 hover:underline-[#eb4d84]"
										to="../login"
									>
										here
									</NavLink>
								</span>{" "}
								to join the vibes again!
							</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</>
	);
};

export default Logout;
