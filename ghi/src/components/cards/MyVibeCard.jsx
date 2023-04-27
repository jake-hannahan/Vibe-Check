import React from "react";
import SongList from "./SongList";
import { NavLink } from "react-router-dom";
import { useDeleteVibeMutation } from "../../services/vibes";


function MyVibesCard(props) {
    const [deleteVibe] = useDeleteVibeMutation();
    const capitalize = (str) => {
        return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ").replace(/_/g, " ");
    };

    const moodColorMap = {
        chill: {
            hoverColor: 'sky-200',
            color: 'sky-400',
            darkColor: 'sky-500',
            textColor: 'sky-900'},
        lazy: {
            hoverColor: 'teal-200',
            color: 'teal-400',
            darkColor: 'teal-500',
            textColor: 'teal-900'},
        dreamy: {
            hoverColor: 'cyan-200',
            color: 'cyan-400',
            darkColor: 'cyan-500',
            textColor: 'cyan-900'},
        productive: {
            hoverColor: 'orange-200',
            color: 'orange-400',
            darkColor: 'orange-500',
            textColor: 'orange-900'},
        adventurous: {
            hoverColor: 'yellow-200',
            color: 'yellow-400',
            darkColor: 'yellow-500',
            textColor: 'yellow-900'},
        confident: {
            hoverColor: 'amber-200',
            color: 'amber-400',
            darkColor: 'amber-500',
            textColor: 'amber-900'},
        romantic: {
            hoverColor: 'rose-200',
            color: 'rose-400',
            darkColor: 'rose-500',
            textColor: 'rose-900'},
        energetic: {
            hoverColor: 'sky-200',
            color: 'lime-400',
            darkColor: 'lime-500',
            textColor: 'lime-900'},
        destructive: {
            hoverColor: 'stone-200',
            color: 'stone-400',
            darkColor: 'stone-500',
            textColor: 'stone-900'},
        gloomy: {
            hoverColor: 'gray-200',
            color: 'gray-400',
            darkColor: 'gray-500',
            textColor: 'gray-900'},
        rejected: {
            hoverColor: 'violet-200',
            color: 'violet-400',
            darkColor: 'violet-500',
            textColor: 'violet-900'},
        melancholic: {
            hoverColor: 'sky-200',
            color: 'indigo-400',
            darkColor: 'indigo-500',
            textColor: 'indigo-900'},
    };

  const moodColor = moodColorMap[props.vibe.mood.toLowerCase()].color||"gray-400";
  const moodNameBackgroundColor = moodColorMap[props.vibe.mood.toLowerCase()].darkColor||"gray-500";
  const moodTextColor = moodColorMap[props.vibe.mood.toLowerCase()].textColor||"gray-900";
  const moodHoverColor = moodColorMap[props.vibe.mood.toLowerCase()].hoverColor||"gray-200"

    return (
    <>
    <NavLink to={{pathname: '/detail'}} state={{vibeId: props.vibe.id}}>
        <div className={`flex justify-center mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg transform transition duration-300 hover:scale-105 bg-${moodColor} hover:bg-${moodHoverColor}`}>
                <div className="flex grid grid-cols-2 w-full h-full space-x-2" key={props.vibe.id}>
                    {/* Left side of the card */}
                    
                    <div className={`relative flex-1 p-2 w-full font-apple-system font-bold text-black text-3xl md:text-xl lg:text-xl text-clip overflow-hidden space-y-4 text-${moodTextColor}`}>{capitalize(props.vibe.name)}
                        {/* Mood box */}
                        <div
                            className={`relative left-0 top-2 flex-1 p-2 w-full text-2xl md:text-lg lg:text-lg xl:text-xl font-apple-system text-black text-center rounded-lg bg-${moodNameBackgroundColor} text-${moodTextColor} hover:bg-${moodColor}`}>{capitalize(props.vibe.mood)}
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
                                
                                    <button
                                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg"
                                        onClick={() => deleteVibe(props.vibe.id)}>
                                        <NavLink to={{pathname:'/my'}} state={{vibe: props.vibe}}>Delete</NavLink> 
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
    </NavLink>
    </>
    )
}

export default MyVibesCard;
