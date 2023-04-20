import { NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const handleClick = () => {
		setIsNavOpen(!isNavOpen);
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

				<div className={isNavOpen ? hidden : visible} id="navbarSupportedContent4" data-te-collapse-item>
					<NavLink className="pr-2 text-xl font-semibold text-white" to="/">
						VibeCheck
					</NavLink>
					<ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
						<li className="p-2" data-te-nav-item-ref>
							<NavLink
								className="p-0 text-white opacity-80 hover:opacity-90 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400"
								to="account/login"
								data-te-nav-link-ref
							>
								Login
							</NavLink>
						</li>
						<li className="p-2" data-te-nav-item-ref>
							<NavLink
								className="p-0 text-white opacity-80 hover:opacity-90 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400"
								to="account/signup"
								data-te-nav-link-ref
							>
								Signup
							</NavLink>
						</li>
						<li className="p-2" data-te-nav-item-ref>
							<NavLink
								className="p-0 text-white opacity-80 hover:opacity-90 focus:opacity-100 disabled:text-black/30 lg:px-2 [&.active]:text-white/90 dark:[&.active]:text-neutral-400"
								to="account/logout"
								data-te-nav-link-ref
							>
								Logout
							</NavLink>
						</li>
					</ul>
				</div>

				<div className="relative flex items-center">
					<div className="relative" data-te-dropdown-ref>
						{/* For stretch goals, the notification feature! */}
						{/* <a
          className="hidden-arrow mr-4 flex items-center text-white opacity-60 hover:opacity-80 focus:opacity-80"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
          <span className="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                clipRule="evenodd" />
            </svg>
          </span>
          <span
            className="absolute -mt-2.5 ml-2 rounded-full bg-red-700 px-1.5 py-0 text-xs text-white"
            >1</span
          >
        </a> */}

						<ul
							className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
							aria-labelledby="dropdownMenuButton1"
							data-te-dropdown-menu-ref
						>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Action
								</a>
							</li>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Another action
								</a>
							</li>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Something else here
								</a>
							</li>
						</ul>
					</div>

					<div className="relative" data-te-dropdown-ref>
						<a
							className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
							href="#"
							id="dropdownMenuButton2"
							role="button"
							data-te-dropdown-toggle-ref
							aria-expanded="false"
						>
							<img
								src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
								className="rounded-full"
								style={{ height: "25px", width: "25px" }}
								alt=""
								loading="lazy"
							/>
						</a>
						<ul
							className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
							aria-labelledby="dropdownMenuButton2"
							data-te-dropdown-menu-ref
						>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Action
								</a>
							</li>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Another action
								</a>
							</li>
							<li>
								<a
									className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
									href="#"
									data-te-dropdown-item-ref
								>
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
