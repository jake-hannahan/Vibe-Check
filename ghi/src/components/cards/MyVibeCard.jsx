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
            darkColor: 'bg-sky-500'},
        lazy: {
            color: 'bg-teal-400',
            darkColor: 'bg-teal-500'},
        dreamy: {
            color: 'bg-cyan-400',
            darkColor: 'bg-cyan-500'},
        productive: {
            color: 'bg-orange-400',
            darkColor: 'bg-orange-500'},
        adventurous: {
            color: 'bg-yellow-400',
            darkColor: 'bg-yellow-500'},
        confident: {
            color: 'bg-amber-400',
            darkColor: 'bg-amber-500'},
        romantic: {
            color: 'bg-rose-400',
            darkColor: 'bg-rose-500'},
        energetic: {
            color: 'bg-lime-400',
            darkColor: 'bg-lime-500'},
        destructive: {
            color: 'bg-stone-400',
            darkColor: 'bg-stone-500'},
        gloomy: {
            color: 'bg-gray-400',
            darkColor: 'bg-gray-500'},
        rejected: {
            color: 'bg-violet-400',
            darkColor: 'bg-violet-500'},
        melancholic: {
            color: 'bg-indigo-400', 
            darkColor: 'bg-indigo-500'},
    };

  const moodColor = moodColorMap[props.vibe.mood.toLowerCase()].darkColor||"bg-gray-400";
  const moodNameBackgroundColor = moodColorMap[props.vibe.mood.toLowerCase()].color||"bg-gray-500";

    return (
    <>
        <div className={`flex justify-center bg-black text-white mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg ${moodColor}`}>
                <div className="flex grid grid-cols-2 w-full h-full space-x-2" key={props.vibe.id}>
                    {/* Left side of the card */}
                    <div className="relative flex-1 p-2 w-full font-apple-system font-bold text-black text-3xl space-y-4">{capitalize(props.vibe.name)}
                        {/* Mood box */}
                        <div 
                            className={`relative left-0 top-2 flex-1 p-2 w-full text-2xl font-apple-system text-black text-center border-dotted border-2 border-white rounded-lg ${moodNameBackgroundColor}`}>{capitalize(props.vibe.mood)}
                        </div>
                            {/* Activity box */}
                            <ul className="absolute pt-4 right-10 left-10 max-h-48 flex-1 text-base font-apple-system text-black text-center overflow-hidden overflow-y-auto divide-y divide-gray-400 divide-opacity-25">{props.vibe.activities.map((activity) => (
                                <li key={activity.name} className="p-2 max-w-prose">
                                    <span className="text-black">{capitalize(activity.category)}</span><br />
                                    <span className="text-white">{capitalize(activity.name)}</span>
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

// const moodColorMap = {
//     chill: {
//         color: 'bg-sky-400', 
//         darkColor: 'bg-sky-700'},
//     lazy: {
//         color: 'bg-teal-400',
//         darkColor: 'bg-teal-700'},
//     dreamy: {
//         color: 'bg-cyan-400',
//         darkColor: 'bg-cyan-700'},
//     productive: {
//         color: 'bg-orange-400',
//         darkColor: 'bg-orange-700'},
//     adventurous: {
//         color: 'bg-yellow-400',
//         darkColor: 'bg-yellow-700'},
//     confident: {
//         color: 'bg-amber-400',
//         darkColor: 'bg-amber-700'},
//     romantic: {
//         color: 'bg-rose-400',
//         darkColor: 'bg-rose-700'},
//     energetic: {
//         color: 'bg-lime-400',
//         darkColor: 'bg-lime-700'},
//     destructive: {
//         color: 'bg-stone-400',
//         darkColor: 'bg-stone-700'},
//     gloomy: {
//         color: 'bg-gray-400',
//         darkColor: 'bg-gray-700'},
//     rejected: {
//         color: 'bg-violet-400',
//         darkColor: 'bg-violet-700'},
//     melancholic: {
//         color: 'bg-indigo-400', 
//         darkColor: 'bg-indigo-700'},
//   };

//   const moodColor = moodColorMap[props.vibe.mood.toLowerCase()].color||"bg-gray-400";
//   const moodNameBackgroundColor = moodColorMap[props.vibe.mood.toLowerCase()].darkColor||"bg-gray-700";