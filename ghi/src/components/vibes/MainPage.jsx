import React from "react";
import CarouselCard from "../cards/CarouselCard";
import { useGetVibesQuery } from "../../services/vibes";
import { useSelector, useDispatch } from 'react-redux'
import { increment } from "../../features/vibes/counterSlice";
import { NavLink } from "react-router-dom";

function MainPage() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const { data, isLoading } = useGetVibesQuery();
    if (isLoading) return <div>Vibe Loading...</div>;
    const moodArr = [
        "chill",
        "lazy",
        "dreamy",
        "productive",
        "adventurous",
        "confident",
        "romantic",
        "energetic",
        "destructive",
        "gloomy",
        "rejected",
        "melancholic"
    ];

    return (
<>
    <div className="container text-center mx-auto my-auto">
      <h1 className="overflow-hidden text-center text-5xl text-gray-800 font-bold rounded-md p-3 my-6">Find a Vibe</h1>
      <div className="container grid gap-2 md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2">
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Productive</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Adventurous</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Confident</button>
            </div>
             <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Romantic</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Energetic</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Destructive</button>
            </div>
             <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Gloomy</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Rejected</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Melancholic</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Chill</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Lazy</button>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">Dreamy</button>
            </div>
      </div>
      <div className="relative mt-8 p-8 bg-blue-400">
        <h1 className="absolute top-3 left-3 text-2xl text-gray-800 font-bold rounded-md">Vibes for when you're feeling {moodArr[count]}</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 bg-blue-400 pb-4 pl-10">
        {data.filter(vibe => vibe.mood === moodArr[count]).slice(0,4).map(vibe => {
            return (
                    <CarouselCard vibe={vibe} key={vibe.id}/>
            )
        })}
      </div>
      <div className="relative p-8 bg-blue-400">
        <NavLink type="button" to={"list"} className="absolute top-0 right-20 bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 py-3 px-4 rounded-full">
            Show All Vibes
        </NavLink>
        <button type="button" onClick={() => dispatch(increment())} className="absolute top-0 right-3 my-1 px-1 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center inline-flex items-center">
            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
    </div>
</>
    )
};

export default MainPage;
