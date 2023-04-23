import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import SongList from "./SongList";


function MyVibesCard(props) {
    const { data, isLoading } = useGetVibesByCreatorQuery(props)
    console.log(data)
    if (isLoading) return <div>Loading...</div>
    
    return (
    <>
        <div className="flex justify-evenly bg-black text-white mx-auto p-8 box-content h-32 max-w-md overscroll-contain rounded-lg border-x-4 border-y-4 border-green-500">

            {data.map((vibe) => (
                <div className="flex grid grid-cols-2 max-w-prose h-full" key={vibe.id}>
                    <div className="flex-1 p-2 w-full object-contain object-left-top font-mono text-lg font-bold text-justify text-green-500">{vibe.name}
                        <div 
                            className="flex-1 p-2 w-full text-base font-normal text-white">{vibe.mood}
                        </div> 
                            <ul>
                                <li>
                                    {vibe.activities.map((activity) => (
                                        <div className="flex-1 text-base font-normal text-white" key={activity.name}>
                                            <li className="p-2 max-w-prose">{activity.category}</li>
                                            <li className="p-2 max-w-prose">{activity.name}</li>                                           
                                        </div>
                                    ))}
                                </li>
                            </ul>
                    </div>
                    <div className="flex-2 overflow-hidden overflow-y-auto flex-3 float-right rounded-lg">
                        <SongList spotifyId = {vibe.spotify_id} />
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default MyVibesCard;