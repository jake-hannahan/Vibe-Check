import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const EditVibeSuccess = () => {
	const [close, setClose] = useState(false);

	let showNotification;

	close ? (showNotification = "hidden") : (showNotification = "");

	const handleClose = () => {
		setClose(!close);
	};

	return (
		<div
			id="logout"
			className={`${showNotification} flex items-center w-fit max-w-s p-4 space-x-3 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 font-raleway`}
			role="alert"
		>
			<div className="text-md font-normal text-center">
				<p>
					You have <span style={{ color: "green" }}>successfully </span> edited your vibe! 🤙
				</p>
				<p>
					Click{" "}
					<span style={{ color: "green", textDecoration: "green underline" }}>
						<NavLink to="../my">here</NavLink>
					</span>{" "}
					to go back to all your vibes!
				</p>
			</div>
			<button
				type="button"
				className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
				data-dismiss-target="#logout"
				aria-label="Close"
				onClick={handleClose}
			>
				<span className="sr-only">Close</span>
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</div>
	);
};
export default EditVibeSuccess;
