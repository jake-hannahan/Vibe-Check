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
                    <div className="relative flex-1 p-2 w-full font-apple-system text-lg font-bold text-justify text-black">{capitalize(props.vibe.name)}
                        {/* Mood box */}
                        <div 
                            className="static left-0 flex-1 p-2 w-full text-base font-apple-system text-black text-center">{capitalize(props.vibe.mood)}
                        </div> 
                            <ul>
                                <li>
                                    {props.vibe.activities.map((activity) => (
                                        // activities box
                                        <div className="static right-10 left-10 flex-1 text-base font-apple-system text-black text-center" key={activity.name}>
                                            <li className="p-2 max-w-prose">{capitalize(activity.category)}</li>
                                            <li className="p-2 max-w-prose">{capitalize(activity.name)}</li>                                           
                                        </div>
                                    ))}
                                </li>
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
