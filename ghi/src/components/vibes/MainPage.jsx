import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useGetVibesQuery } from "../../services/vibes";
import { useGetAccountQuery } from "../../services/auth";
import { increment, set } from "../../features/vibes/counterSlice";
import Login from "../auth/Login";
import CarouselCard from "../cards/CarouselCard";
import Hero from "../cards/Hero";
import CarouselBG from "../cards/CarouselBG";
import Footer from "../cards/Footer";
import "../auth/form.css";

const MainPage = () => {
	const dispatch = useDispatch();
	const { data, isLoading } = useGetVibesQuery();
	const count = useSelector((state) => state.counter.value);

	if (isLoading) return <div>Vibe Loading...</div>;
	const moodArr = [
		{
			idx: 0,
			mood: "Adventurous",
			color: "yellow",
			hover_bg: "hover:bg-yellow-400",
			hover_border: "hover:border-yellow-500",
			focus_bg: "focus:bg-yellow-400",
			focus_border: "focus:border-yellow-500",
		},
		{
			idx: 1,
			mood: "Chill",
			color: "sky",
			hover_bg: "hover:bg-sky-400",
			hover_border: "hover:border-sky-500",
			focus_bg: "focus:bg-sky-400",
			focus_border: "focus:border-sky-500",
		},
		{
			idx: 2,
			mood: "Confident",
			color: "amber",
			hover_bg: "hover:bg-amber-400",
			hover_border: "hover:border-amber-500",
			focus_bg: "focus:bg-amber-400",
			focus_border: "focus:border-amber-500",
		},
		{
			idx: 3,
			mood: "Destructive",
			color: "stone",
			hover_bg: "hover:bg-stone-400",
			hover_border: "hover:border-stone-500",
			focus_bg: "focus:bg-stone-400",
			focus_border: "focus:border-stone-500",
		},
		{
			idx: 4,
			mood: "Dreamy",
			color: "cyan",
			hover_bg: "hover:bg-cyan-400",
			hover_border: "hover:border-cyan-500",
			focus_bg: "focus:bg-cyan-400",
			focus_border: "focus:border-cyan-500",
		},
		{
			idx: 5,
			mood: "Energetic",
			color: "lime",
			hover_bg: "hover:bg-lime-400",
			hover_border: "hover:border-lime-500",
			focus_bg: "focus:bg-lime-400",
			focus_border: "focus:border-lime-500",
		},
		{
			idx: 6,
			mood: "Gloomy",
			color: "gray",
			hover_bg: "hover:bg-gray-400",
			hover_border: "hover:border-gray-500",
			focus_bg: "focus:bg-gray-400",
			focus_border: "focus:border-gray-500",
		},
		{
			idx: 7,
			mood: "Lazy",
			color: "teal",
			hover_bg: "hover:bg-teal-400",
			hover_border: "hover:border-teal-500",
			focus_bg: "focus:bg-teal-400",
			focus_border: "focus:border-teal-500",
		},
		{
			idx: 8,
			mood: "Melancholic",
			color: "indigo",
			hover_bg: "hover:bg-indigo-400",
			hover_border: "hover:border-indigo-500",
			focus_bg: "focus:bg-indigo-400",
			focus_border: "focus:border-indigo-500",
		},
		{
			idx: 9,
			mood: "Productive",
			color: "orange",
			hover_bg: "hover:bg-orange-400",
			hover_border: "hover:border-orange-500",
			focus_bg: "focus:bg-orange-400",
			focus_border: "focus:border-orange-500",
		},
		{
			idx: 10,
			mood: "Rejected",
			color: "violet",
			hover_bg: "hover:bg-violet-400",
			hover_border: "hover:border-violet-500",
			focus_bg: "focus:bg-violet-400",
			focus_border: "focus:border-violet-500",
		},
		{
			idx: 11,
			mood: "Romantic",
			color: "rose",
			hover_bg: "hover:bg-rose-400",
			hover_border: "hover:border-rose-500",
			focus_bg: "focus:bg-rose-400",
			focus_border: "focus:border-rose-500",
		},
	];

	return (
		<>
			<div>
				<Hero />
				{/* Div to give Hero card visibility */}
				<div className="h-[100vh]"></div>
				<div className="h-[30vh] text-white bg-neutral-900 box-border flex flex-col items-center justify-center align-middle border-y-4 border-[#C43749]">
					<h1 className="text-4xl text-center">🚧 UNDER CONSTRUCTION 🚧</h1>
					<h3 className="text-2xl text-center">*Some descriptive text or something will go here*</h3>
				</div>
				<div className="h-[calc(100vh-4.5rem)] text-white bg-neutral-400 flex flex-col items-center justify-center align-middle ">
					<div className="h-full w-full relative">
						<div className="w-full absolute top-0">
							<CarouselBG />
						</div>
						<div className="h-[40%] w-full box-border pl-1 py-8 absolute z-10 grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
							{moodArr.map((mood) => {
								return (
									<div className="w-full px-5" key={mood.idx}>
										<button
											onClick={() => dispatch(set(mood.idx))}
											className={`w-full bg-gray-900 text-white font-semibold py-2 px-4 border-b-4 border-r-4 border-gray-700 rounded font-raleway tracking-widest cursor-override ${mood.hover_bg} ${mood.hover_border} ${mood.focus_bg} ${mood.focus_border}`}
										>
											{mood.mood}
										</button>
									</div>
								);
							})}
						</div>
						<div
							className={`h-[60%] w-full box-border my-4 p-4 absolute top-[40%] z-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${moodArr[count].color} border-4 border-green-400`}
						>
							<div>test</div>
						</div>
					</div>
				</div>
				<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
					<Footer />
				</div>
			</div>
		</>
	);
};

export const Main = () => {
	const { data: account } = useGetAccountQuery();
	return <div>{account ? <MainPage /> : <Login />}</div>;
};

{
	/* <>
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
</> */
}
