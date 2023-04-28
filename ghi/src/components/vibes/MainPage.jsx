import React from "react";
import CarouselCard from "../cards/CarouselCard";
import { useGetVibesQuery } from "../../services/vibes";
import { useSelector, useDispatch } from "react-redux";
import { increment, set } from "../../features/vibes/counterSlice";
import { NavLink } from "react-router-dom";
import Login from "../auth/Login";
import { useGetAccountQuery } from "../../services/auth";
import "../auth/form.css";
import { ReactComponent as Logo } from "../../static/logo-no-background.svg";

const MainPage = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	const { data, isLoading } = useGetVibesQuery();
	if (isLoading) return <div>Vibe Loading...</div>;
	const moodArr = [
		"Chill",
		"Lazy",
		"Dreamy",
		"Productive",
		"Adventurous",
		"Confident",
		"Romantic",
		"Energetic",
		"Destructive",
		"Gloomy",
		"Rejected",
		"Melancholic",
	];
	const colorArr = [
		"sky",
		"teal",
		"cyan",
		"orange",
		"yellow",
		"amber",
		"rose",
		"lime",
		"stone",
		"gray",
		"violet",
		"indigo",
	];
	const colors = {
		sky: "bg-sky-400",
		teal: "bg-teal-400",
		cyan: "bg-cyan-400",
		orange: "bg-orange-400",
		yellow: "bg-yellow-400",
		amber: "bg-amber-400",
		rose: "bg-rose-400",
		lime: "bg-lime-400",
		stone: "bg-stone-400",
		gray: "bg-gray-400",
		violet: "bg-violet-400",
		indigo: "bg-indigo-400",
	};

	return (
		<>
			<div className="h-screen container text-center mx-auto my-auto">
				<div className="flex justify-center m-8">
					<Logo className="h-2/3 w-4/5" />
				</div>
				<div className="container grid gap-2 md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2">
					<div>
						<button
							onClick={() => dispatch(set(3))}
							className="bg-gray-900 hover:bg-orange-400 text-white font-semibold py-2 px-4 border-b-4 border-r-4 focus:bg-orange-400 focus:border-orange-500 border-gray-700 hover:border-orange-500 rounded w-full font-raleway tracking-widest"
						>
							Productive
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(4))}
							className="bg-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:border-yellow-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-yellow-500 rounded w-full font-raleway tracking-widest"
						>
							Adventurous
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(5))}
							className="bg-gray-900 hover:bg-amber-400 focus:bg-amber-400 focus:border-amber-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-amber-500 rounded w-full font-raleway tracking-widest"
						>
							Confident
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(6))}
							className="bg-gray-900 hover:bg-rose-400 focus:bg-rose-400 focus:border-rose-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-rose-500 rounded w-full font-raleway tracking-widest"
						>
							Romantic
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(7))}
							className="bg-gray-900 hover:bg-lime-400 focus:bg-lime-400 focus:border-lime-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-lime-500 rounded w-full font-raleway tracking-widest"
						>
							Energetic
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(8))}
							className="bg-gray-900 hover:bg-stone-400 focus:bg-stone-400 focus:border-stone-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-stone-500 rounded w-full font-raleway tracking-widest"
						>
							Destructive
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(9))}
							className="bg-gray-900 hover:bg-gray-400 focus:bg-gray-400 focus:border-gray-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-gray-500 rounded w-full font-raleway tracking-widest"
						>
							Gloomy
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(10))}
							className="bg-gray-900 hover:bg-violet-400 focus:bg-violet-400 focus:border-violet-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-violet-500 rounded w-full font-raleway tracking-widest"
						>
							Rejected
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(11))}
							className="bg-gray-900 hover:bg-indigo-400 focus:bg-indigo-400 focus:border-indigo-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-indigo-500 rounded w-full font-raleway tracking-widest"
						>
							Melancholic
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(0))}
							className="bg-gray-900 hover:bg-sky-400 focus:bg-sky-400 focus:border-sky-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-sky-500 rounded w-full font-raleway tracking-widest"
						>
							Chill
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(1))}
							className="bg-gray-900 hover:bg-teal-400 focus:bg-teal-400 focus:border-teal-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-teal-500 rounded w-full font-raleway tracking-widest"
						>
							Lazy
						</button>
					</div>
					<div>
						<button
							onClick={() => dispatch(set(2))}
							className="bg-gray-900 hover:bg-cyan-400 focus:bg-cyan-400 focus:border-cyan-500 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 hover:border-cyan-500 rounded w-full font-raleway tracking-widest"
						>
							Dreamy
						</button>
					</div>
				</div>
				<div
					className={`relative container p-4 mt-4 pb-8 grid grid-cols-4 w-screen justify-items-center h-content rounded ${
						colors[colorArr[count]]
					}`}
				>
					<div className="col-span-4 h-12 mb-4">
						<div className="w-fill h-fill mx-auto rounded-lg pt-3 pb-3 pl-5 pr-5 bg-gray-100 bg-opacity-25 shadow-xl">
							<h1 className="text-3xl text-gray-800 font-raleway font-semibold">
								Vibes for when you're feeling <br />
								<span className="underline underline-offset-4 decoration-gray-800">
									{moodArr[count]}
								</span>
							</h1>
						</div>
					</div>
					<div className="col-span-4 grid grid-cols-4 justify-items-center mt-12 w-full">
						{data
							.filter((vibe) => vibe.mood === moodArr[count])
							.slice(0, 4)
							.map((vibe) => {
								return <CarouselCard vibe={vibe} color={colorArr[count]} key={vibe.id} />;
							})}
					</div>
					<div className="col-span-4 h-content mt-8 w-full flex justify-end">
						<NavLink
							type="button"
							to={"list"}
							className="h-12 p-3 m-1 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-full mr-3 font-raleway"
						>
							Show All Vibes
						</NavLink>

						<button
							type="button"
							onClick={() => dispatch(increment())}
							className="h-12 p-4 bg-gray-900 hover:bg-gray-700 text-white font-bold rounded-full mr-2 font-raleway"
						>
							<svg
								aria-hidden="true"
								className="w-full h-full"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export const Main = () => {
	const { data: account } = useGetAccountQuery();
	return <div>{account ? <MainPage /> : <Login />}</div>;
};
