import React from "react";
import SongList from "./SongList";
import { NavLink } from "react-router-dom";


function MyVibesCard(props) {
    const capitalize = (str) => {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ").replace(/_/g, " ");
    };

    const moodColorMap = {
        chill: {
            color: 'bg-sky-400', 
            darkColor: 'bg-sky-500',
            textColor: 'text-sky-900'},
        lazy: {
            color: 'bg-teal-400',
            darkColor: 'bg-teal-500',
            textColor: 'text-teal-900'},
        dreamy: {
            color: 'bg-cyan-400',
            darkColor: 'bg-cyan-500',
            textColor: 'text-cyan-900'},
        productive: {
            color: 'bg-orange-400',
            darkColor: 'bg-orange-500',
            textColor: 'text-orange-900'},
        adventurous: {
            color: 'bg-yellow-400',
            darkColor: 'bg-yellow-500',
            textColor: 'text-yellow-900'},
        confident: {
            color: 'bg-amber-400',
            darkColor: 'bg-amber-500',
            textColor: 'text-amber-900'},
        romantic: {
            color: 'bg-rose-400',
            darkColor: 'bg-rose-500',
            textColor: 'text-rose-900'},
        energetic: {
            color: 'bg-lime-400',
            darkColor: 'bg-lime-500',
            textColor: 'text-lime-900'},
        destructive: {
            color: 'bg-stone-400',
            darkColor: 'bg-stone-500',
            textColor: 'text-stone-900'},
        gloomy: {
            color: 'bg-gray-400',
            darkColor: 'bg-gray-500',
            textColor: 'text-gray-900'},
        rejected: {
            color: 'bg-violet-400',
            darkColor: 'bg-violet-500',
            textColor: 'text-violet-900'},
        melancholic: {
            color: 'bg-indigo-400', 
            darkColor: 'bg-indigo-500',
            textColor: 'text-indigo-900'},
    };

  const moodColor = moodColorMap[props.vibe.mood.toLowerCase()].color||"bg-gray-400";
  const moodNameBackgroundColor = moodColorMap[props.vibe.mood.toLowerCase()].darkColor||"bg-gray-500";
  const moodTextColor = moodColorMap[props.vibe.mood.toLowerCase()].textColor||"text-gray-900";

    return (
    <>
        <div className={`flex justify-center bg-black mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg ${moodColor}`}>
                <div className="flex grid grid-cols-2 w-full h-full space-x-2" key={props.vibe.id}>
                    {/* Left side of the card */}
                    <div className={`relative flex-1 p-2 w-full font-apple-system font-bold text-black text-3xl md:text-xl lg:text-xl text-clip overflow-hidden space-y-4 ${moodTextColor}`}>{capitalize(props.vibe.name)}
                        {/* Mood box */}
                        <div 
                            className={`relative left-0 top-2 flex-1 p-2 w-full text-2xl md:text-lg lg:text-lg xl:text-xl font-apple-system text-black text-center rounded-lg ${moodNameBackgroundColor} ${moodTextColor}`}>{capitalize(props.vibe.mood)}
                        </div>
                            {/* Activity box */}
                            <ul className="absolute pt-4 right-10 left-10 max-h-48 max-w-prose flex-1 text-base md:text-sm lg:text-base xl:text-lg font-apple-system text-black text-center overflow-hidden overflow-y-auto divide-y divide-gray-400 divide-opacity-25">{props.vibe.activities.map((activity) => (
                                <li key={activity.name} className="p-2 max-w-prose">
                                    <span className="text-black">{capitalize(activity.category)}</span><br />
                                    <span className="text-gray-700">{capitalize(activity.name)}</span>
                                </li>
                                ))}
                            </ul>
                            {/* Buttons box */}
                            <ul className="absolute bottom-0 left-3 flex justify-center mt-auto gap-x-6 text-base">
                                <li>
                                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                                        <NavLink to={{pathname:'/edit'}} state={{vibe: props.vibe}}>Edit</NavLink>
                                    </button>
                                </li>
                                <li>
                                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                                        <NavLink to={{pathname: '/detail'}} state={{vibeId: props.vibe.id}}>Details</NavLink>
                                    </button>
                                </li>
                            </ul>
                    </div>
                    {/* Songlist box */}
                    <div className="flex-2 overflow-hidden overflow-y-auto float-right rounded-lg w-full h-full grow">
                        <SongList spotifyId = {props.vibe.spotify_id} />
                    </div>
                </div>
        </div>
    </>
    )
}

export default MyVibesCard;