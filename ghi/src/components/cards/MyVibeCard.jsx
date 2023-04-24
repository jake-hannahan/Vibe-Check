import React from "react";
import SongList from "./SongList";
import { NavLink } from "react-router-dom";


function MyVibesCard(props) {

    return (
    <>
        <div className="flex justify-center bg-black text-white mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg border-x-4 border-y-4 border-green-500">
                <div className="border-2 border-sky-500 flex grid grid-cols-2 w-full h-full" key={props.vibe.id}>
                    <div className="flex-1 p-2 w-full object-contain object-left-top font-apple-system text-lg font-bold text-justify text-green-500">{props.vibe.name}
                        <div
                            className="flex-1 p-2 w-full text-base font-apple-system text-white">{props.vibe.mood}
                        </div>
                            <ul>
                                <li>
                                    {props.vibe.activities.map((activity) => (
                                        <div className="flex-1 text-base font-apple-system text-white" key={activity.name}>
                                            <li className="p-2 max-w-prose">{activity.category}</li>
                                            <li className="p-2 max-w-prose">{activity.name}</li>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                            <ul>
                                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    <NavLink to={{pathname:'/edit'}} state={{vibe: props.vibe}}>Edit</NavLink>
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                    <NavLink to={{pathname: '/detail'}} state={{vibeId: props.vibe.id}}>Details</NavLink>
                                </button>
                            </ul>
                    </div>
                    <div className="border-2 border-sky-500 flex-2 overflow-hidden overflow-y-auto float-right rounded-lg w-full h-full grow">
                        <SongList spotifyId = {props.vibe.spotify_id} />
                    </div>
                </div>
        </div>
    </>
    )
}

export default MyVibesCard;
