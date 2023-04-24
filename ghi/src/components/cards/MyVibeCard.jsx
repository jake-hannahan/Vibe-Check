import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import SongList from "./SongList";


function MyVibesCard(props) {
    // const { data, isLoading } = useGetVibesByCreatorQuery(props)
    // console.log(props)
    // if (isLoading) return <div>Loading...</div>
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