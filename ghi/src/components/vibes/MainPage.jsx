import React from "react";
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
			color_bg: "bg-yellow-400/80",
			hover_bg: "hover:bg-yellow-400",
			hover_border: "hover:border-yellow-500",
			focus_bg: "focus:bg-yellow-400",
			focus_border: "focus:border-yellow-500",
			border_color: "border-yellow-500",
			underline: "decoration-yellow-700",
		},
		{
			idx: 1,
			mood: "Chill",
			color: "sky",
			color_bg: "bg-sky-400",
			hover_bg: "hover:bg-sky-400",
			hover_border: "hover:border-sky-500",
			focus_bg: "focus:bg-sky-400",
			focus_border: "focus:border-sky-500",
			border_color: "border-sky-500",
			underline: "decoration-sky-700",
		},
		{
			idx: 2,
			mood: "Confident",
			color: "amber",
			color_bg: "bg-amber-400",
			hover_bg: "hover:bg-amber-400",
			hover_border: "hover:border-amber-500",
			focus_bg: "focus:bg-amber-400",
			focus_border: "focus:border-amber-500",
			border_color: "border-amber-500",
			underline: "decoration-amber-700",
		},
		{
			idx: 3,
			mood: "Destructive",
			color: "stone",
			color_bg: "bg-stone-400",
			hover_bg: "hover:bg-stone-400",
			hover_border: "hover:border-stone-500",
			focus_bg: "focus:bg-stone-400",
			focus_border: "focus:border-stone-500",
			border_color: "border-stone-500",
			underline: "decoration-stone-700",
		},
		{
			idx: 4,
			mood: "Dreamy",
			color: "cyan",
			color_bg: "bg-cyan-400",
			hover_bg: "hover:bg-cyan-400",
			hover_border: "hover:border-cyan-500",
			focus_bg: "focus:bg-cyan-400",
			focus_border: "focus:border-cyan-500",
			border_color: "border-cyan-500",
			underline: "decoration-cyan-700",
		},
		{
			idx: 5,
			mood: "Energetic",
			color: "lime",
			color_bg: "bg-lime-400",
			hover_bg: "hover:bg-lime-400",
			hover_border: "hover:border-lime-500",
			focus_bg: "focus:bg-lime-400",
			focus_border: "focus:border-lime-500",
			border_color: "border-lime-500",
			underline: "decoration-lime-700",
		},
		{
			idx: 6,
			mood: "Gloomy",
			color: "gray",
			color_bg: "bg-gray-400",
			hover_bg: "hover:bg-gray-400",
			hover_border: "hover:border-gray-500",
			focus_bg: "focus:bg-gray-400",
			focus_border: "focus:border-gray-500",
			border_color: "border-gray-500",
			underline: "decoration-gray-700",
		},
		{
			idx: 7,
			mood: "Lazy",
			color: "teal",
			color_bg: "bg-teal-400",
			hover_bg: "hover:bg-teal-400",
			hover_border: "hover:border-teal-500",
			focus_bg: "focus:bg-teal-400",
			focus_border: "focus:border-teal-500",
			border_color: "border-teal-500",
			underline: "decoration-teal-700",
		},
		{
			idx: 8,
			mood: "Melancholic",
			color: "indigo",
			color_bg: "bg-indigo-400",
			hover_bg: "hover:bg-indigo-400",
			hover_border: "hover:border-indigo-500",
			focus_bg: "focus:bg-indigo-400",
			focus_border: "focus:border-indigo-500",
			border_color: "border-indigo-500",
			underline: "decoration-indigo-700",
		},
		{
			idx: 9,
			mood: "Productive",
			color: "orange",
			color_bg: "bg-orange-400",
			hover_bg: "hover:bg-orange-400",
			hover_border: "hover:border-orange-500",
			focus_bg: "focus:bg-orange-400",
			focus_border: "focus:border-orange-500",
			border_color: "border-orange-500",
			underline: "decoration-orange-700",
		},
		{
			idx: 10,
			mood: "Rejected",
			color: "violet",
			color_bg: "bg-violet-400",
			hover_bg: "hover:bg-violet-400",
			hover_border: "hover:border-violet-500",
			focus_bg: "focus:bg-violet-400",
			focus_border: "focus:border-violet-500",
			border_color: "border-violet-500",
			underline: "decoration-violet-700",
		},
		{
			idx: 11,
			mood: "Romantic",
			color: "rose",
			color_bg: "bg-rose-400",
			hover_bg: "hover:bg-rose-400",
			hover_border: "hover:border-rose-500",
			focus_bg: "focus:bg-rose-400",
			focus_border: "focus:border-rose-500",
			border_color: "border-rose-500",
			underline: "decoration-rose-700",
		},
	];

	return (
		<>
			<div>
				<Hero />
				{/* Div to give Hero card visibility */}
				<div className="h-[100vh]"></div>
				<div className="h-[30vh] text-white bg-neutral-900 box-border flex flex-col items-center justify-center align-middle border-y-4 font-raleway border-[#C43749]">
					<h1 className="text-2xl text-center">Vibe Check is a party.</h1>
					<h1 className="text-2xl text-center">
						Or maybe it's a social network? Wholesome{" "}
						<a
							href="https://media.tenor.com/GA-_QG_hfPYAAAAC/toad-screaming.gif"
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-override"
						>
							chaos!
						</a>
					</h1>
					<h1 className="text-2xl text-center">
						It's whatever you guys, the Vibers (or whatever you guys call yourselves), make of it.{" "}
					</h1>
					<h1 className="text-2xl text-center">Embrace the silliness. Embrace the weird. Just vibe out.</h1>
				</div>
				<div className="h-[calc(100vh-4.5rem)] text-white bg-neutral-400 flex flex-col items-center justify-center align-middle ">
					<div className="h-full w-full relative">
						<div className="w-full absolute top-0">
							<CarouselBG />
						</div>
						<div className="h-[30%] w-full box-border -pl-1 pr-2 py-8 absolute z-10 grid gap-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center">
							{moodArr.map((mood) => {
								return (
									<div className="w-full px-5 flex items-center" key={mood.idx}>
										<button
											onClick={() => dispatch(set(mood.idx))}
											className={`w-full bg-gray-900 text-white font-semibold py-2 px-4 border-b-[6px] border-r-8 border-gray-700 rounded-md font-raleway tracking-widest cursor-override ${mood.hover_bg} ${mood.hover_border} ${mood.focus_bg} ${mood.focus_border}`}
										>
											{mood.mood}
										</button>
									</div>
								);
							})}
						</div>
						<div
							className={`h-[70%] w-full box-border pb-6 absolute top-[30%] z-10 flex align-middle justify-center items-center `}
						>
							<div
								className={`h-[90%] w-[90%] box-border grid grid-flow-row grid-cols-4 grid-rows-6 justify-items-center border-b-[6px] border-r-8 rounded-3xl ${moodArr[count].color_bg} ${moodArr[count].border_color}`}
							>
								<div
									className={`col-span-4 row-span-1 h-full w-[75%] mt-4 box-border flex items-center justify-center align-middle bg-slate-200/40 shadow-2xl rounded-xl`}
								>
									<h1 className="font-raleway font-semibold text-2xl">
										Vibes for when you're feeling:{" "}
										<span
											className={`text-3xl ml-4 underline underline-offset-8 ${moodArr[count].underline}`}
										>
											{moodArr[count].mood}
										</span>
									</h1>
								</div>
								<div className="col-span-4 row-span-4 h-full w-full box-border flex items-center justify-around align-middle">
									{data
										.filter((vibe) => vibe.mood === moodArr[count].mood)
										.slice(0, 4)
										.map((vibe) => {
											return (
												<CarouselCard vibe={vibe} color={moodArr[count].color} key={vibe.id} />
											);
										})}
								</div>
								<div className="col-span-4 row-span-1 h-full w-full box-border flex align-middle justify-end ">
									<div className="h-full w-fit ">
										<NavLink
											type="button"
											to={"list"}
											className="py-3 px-4 bg-slate-200/40 shadow-2xl hover:bg-slate-600 text-white font-bold rounded-full font-raleway text-xl "
										>
											Show All Vibes
										</NavLink>
									</div>
									<div className="h-full w-fit pt-1 ml-5 mr-8 ">
										<button
											type="button"
											onClick={() => dispatch(increment())}
											className="h-[3rem] w-auto p-2 bg-slate-200/40 shadow-2xl hover:bg-slate-600 text-white font-bold rounded-full font-raleway"
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
