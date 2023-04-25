import React from "react";
import SongList from "./SongList";
import { NavLink } from "react-router-dom";


function MyVibesCard(props) {
    const capitalize = (str) => {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ").replace(/_/g, " ");
    };

    const moodColorMap = {
        chill: 'bg-sky-400',
        lazy: 'bg-teal-400',
        dreamy: 'bg-cyan-400',
        productive: 'bg-orange-400',
        adventurous: 'bg-yellow-400',
        confident: 'bg-amber-400',
        romantic: 'bg-rose-400',
        energetic: 'bg-lime-400',
        destructive: 'bg-stone-400',
        gloomy: 'bg-gray-400',
        rejected: 'bg-violet-400',
        melancholic: 'bg-indigo-400',
    };

    const moodColor = moodColorMap[props.vibe.mood.toLowerCase()]||"bg-gray-400";

    return (
    <>
        <div className={`flex justify-center bg-black text-white mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg ${moodColor}`}>
                <div className="flex grid grid-cols-2 w-full h-full" key={props.vibe.id}>
                    {/* Left side of the card */}
                    <div className="relative flex-1 p-2 w-full font-apple-system font-bold text-black text-3xl">{capitalize(props.vibe.name)}
                        {/* Mood box */}
                        <div 
                            className="relative left-0 flex-1 p-2 w-full text-2xl font-apple-system text-black text-center border-2 border-white rounded-lg bg-blend-darken">{capitalize(props.vibe.mood)}
                        </div> 
                            <ul className="absolute right-10 left-10 flex-1 text-base font-apple-system text-black text-center overflow-hidden divide-y divide-gray-400 divide-opacity-25">{props.vibe.activities.map((activity) => (
                                <li key={activity.name} className="p-2 max-w-prose">
                                    <span className="text-gray-400">{capitalize(activity.category)}</span><br />
                                    <span className="text-white">{capitalize(activity.name)}</span>
                                </li>
                                ))}
                            </ul>
                            {/* Buttons box */}
                            <ul className="absolute bottom-0 left-3 flex justify-center mt-auto gap-x-6">
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


// <ul className="absolute right-10 left-10 flex-1 text-base font-apple-system text-black text-center overflow-hidden divide-y divide-gray-400 divide-opacity-25">{props.vibe.activities.map((activity) => (
//     <li key={activity.name} className="p-2 max-w-prose">
//         <span className="text-gray-400">{capitalize(activity.category)}</span><br />
//         <span className="text-white">{capitalize(activity.name)}</span>
//     </li>
//     ))}
// </ul>