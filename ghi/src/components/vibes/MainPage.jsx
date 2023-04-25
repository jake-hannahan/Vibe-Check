import React from "react";
import CarouselCard from "../cards/CarouselCard";
import { useGetVibesQuery } from "../../services/vibes";
import { useSelector, useDispatch } from 'react-redux'
import { increment, set } from "../../features/vibes/counterSlice";
import { NavLink } from "react-router-dom";
import Login from "../auth/Login";
import { useGetAccountQuery } from "../../services/auth";


const MainPage = () => {
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
        "indigo"
    ]
    const colors = {
        sky: 'bg-sky-400',
        teal: 'bg-teal-400',
        cyan: 'bg-cyan-400',
        orange: 'bg-orange-400',
        yellow: 'bg-yellow-400',
        amber: 'bg-amber-400',
        rose: 'bg-rose-400',
        lime: 'bg-lime-400',
        stone: 'bg-stone-400',
        gray: 'bg-gray-400',
        violet: 'bg-violet-400',
        indigo: 'bg-indigo-400',
    }
    // let start = 0
    // let end = 4
    // const changeSlice = () => {
    //     start += 4;
    //     end += 4
    // }

    return (
<>
    <div className="container text-center mx-auto my-auto">
      <h1 className="overflow-hidden text-center text-5xl text-gray-800 font-bold rounded-md p-3 my-6">Find a Vibe</h1>
      <div className="container grid gap-2 md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2">
            <div>
                <button
                    onClick={() => dispatch(set(3))}
                    className="bg-orange-400 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded w-full"
                    >
                    Productive
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(4))}
                    className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-full"
                    >
                    Adventurous
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(5))}
                    className="bg-amber-500 hover:bg-amber-400 text-white font-bold py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 rounded w-full"
                    >
                    Confident
                </button>
            </div>
             <div>
                <button
                    onClick={() => dispatch(set(6))}
                    className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded w-full"
                    >
                    Romantic
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(7))}
                    className="bg-lime-500 hover:bg-lime-400 text-white font-bold py-2 px-4 border-b-4 border-lime-700 hover:border-lime-500 rounded w-full"
                    >
                    Energetic
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(8))}
                    className="bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px-4 border-b-4 border-stone-700 hover:border-stone-500 rounded w-full"
                    >
                    Destructive
                </button>
            </div>
             <div>
                <button
                    onClick={() => dispatch(set(9))}
                    className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded w-full"
                    >
                    Gloomy
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(10))}
                    className="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded w-full"
                    >
                    Rejected
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(11))}
                    className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded w-full"
                    >
                    Melancholic
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(0))}
                    className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded w-full"
                    >
                    Chill
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(1))}
                    className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded w-full"
                    >
                    Lazy
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(set(2))}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 rounded w-full"
                    >
                    Dreamy
                </button>
            </div>
      </div>
      <div className={`relative mt-8 p-8 rounded-t-3xl ${colors[colorArr[count]]}`}>
        <h1 className="absolute top-3 left-3 text-2xl text-gray-800 font-bold rounded-md">Vibes for when you're feeling {moodArr[count]}</h1>
      </div>
      <div className={`grid grid-cols-4 gap-1 justify-items-center p-1 ${colors[colorArr[count]]}`}>
        {data.filter(vibe => vibe.mood === moodArr[count]).slice(0,4).map(vibe => {
            return (
                    <CarouselCard vibe={vibe} color={colorArr[count]} key={vibe.id}/>
            )
        })}
      </div>
      <div className={`relative p-8 rounded-b-3xl ${colors[colorArr[count]]}`}>
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

export const Main = () => {
    const { data: account } = useGetAccountQuery();
    return (
        <div>
            {account ? <MainPage /> : <Login />}
        </div>
    );
};
