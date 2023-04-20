import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import SongList from "./SongList";


function MyVibesCard(props) {
    const { data, isLoading } = useGetVibesByCreatorQuery(props)
    console.log(data)
    if (isLoading) return <div>Loading...</div>
    
    return (
    <>
        <div className="flex bg-black text-white mx-auto p-10 box-content h-32 max-w-prose hover:box-content overscroll-contain">

            {data.map((vibe) => (
                <div className="flex grid grid-cols-2 space-x-36 max-w-prose border-b border-gray-800 hover:bg-gray-800" key={vibe.id}>
                    <div className="flex-1 p-2 w-full object-contain object-left-top">{vibe.name}
                        <div 
                            className="flex-1 p-2 w-full">{vibe.mood}
                        </div> 
                            <ul>
                                <li>
                                    {vibe.activities.map((activity) => (
                                        <div className="flex-1 border-b border-gray-800 hover:bg-gray-800" key={activity.name}>
                                            <ul>
                                                <li className="p-2 w-full">{activity.category}
                                                </li>
                                                <li className="p-2 w-full">{activity.name}
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                    </div>
                    <div className="flex-2 overflow-hidden overflow-y-auto object-contain object-right-top flex-3 float-right">
                        <SongList playlistId = {vibe.playlist_id} spotifyId = {vibe.spotify_id} />
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default MyVibesCard;