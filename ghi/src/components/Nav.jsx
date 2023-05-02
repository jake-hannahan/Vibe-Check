import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLogoutMutation } from "../services/auth";
import { useGetAccountQuery } from "../services/auth";
import { ReactComponent as VibeCheckLogo } from "../static/logo-no-background.svg";

function Nav() {
	const [logout] = useLogoutMutation();
	const [isNavOpen, setIsNavOpen] = useState(false);
	const { data: account } = useGetAccountQuery();
	const handleClick = () => {
		setIsNavOpen(!isNavOpen);
	};

	const UserCheck = () => {
		if (!account) {
			return (
				<>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to="account/login"
							data-te-nav-link-ref
						>
							Login
						</NavLink>
					</li>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to="account/signup"
							data-te-nav-link-ref
						>
							Signup
						</NavLink>
					</li>
				</>
			);
		} else {
			return (
				<>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to=""
							data-te-nav-link-ref
						>
							Home
						</NavLink>
					</li>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to="list"
							data-te-nav-link-ref
						>
							All Vibes
						</NavLink>
					</li>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to="my"
							data-te-nav-link-ref
						>
							My Vibes
						</NavLink>
					</li>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							to="new"
							data-te-nav-link-ref
						>
							Craft Vibe
						</NavLink>
					</li>
					<li className="p-2" data-te-nav-item-ref>
						<NavLink
							className="p-0 text-white opacity-75 hover:opacity-100 hover:underline hover:underline-offset-8 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400 font-raleway text-xl tracking-widest cursor-override"
							onClick={logout}
							to="account/logout"
							data-te-nav-link-ref
						>
							Logout
						</NavLink>
					</li>
				</>
			);
		}
	};

	const visible = "!visible flex-grow basis-[100%] items-center lg:!flex lg:basis-auto";

	const hidden = "!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto";

	return (
		<nav
			className="relative flex w-full flex-wrap items-center justify-between bg-neutral-900 py-3 text-neutral-200 shadow-lg lg:flex-wrap lg:justify-start"
			data-te-navbar-ref
		>
			<div className="flex w-full flex-wrap items-center justify-between px-6">
				<button
					className="block border-0 bg-transparent px-2.5 py-2 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
					type="button"
					onClick={handleClick}
					data-te-collapse-init
					data-te-target="#navbarSupportedContent4"
					aria-controls="navbarSupportedContent4"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="[&>svg]:w-7">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-7 w-7"
						>
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</button>
				<NavLink className="pr-2" to="/">
					<VibeCheckLogo className="inline-block h-12 w-40" />
				</NavLink>
				<div className={isNavOpen ? hidden : visible} id="navbarSupportedContent4" data-te-collapse-item>
					<ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
						<UserCheck />
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
