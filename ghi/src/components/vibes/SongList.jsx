import React from "react";
import { useGetPlaylistQuery } from "../../services/spotify";


function SongList(playlistId) {
    const { data, isLoading } = useGetPlaylistQuery(playlistId=playlistId)
    if (isLoading) return <div>Loading...</div>
    return (
    <>

        <div class="bg-black flex items-center justify-end top-0 right-0 z-10">
            <button class="bg-blue-700 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded">
                Link to playlist
            </button>
        </div>
        <div className="bg-black text-gray-300 min-h-screen p-1">
            <div className="mt-10">
                <div className="flex text-gray-200 underline font-extrabold">
                    {/* <div className="p-2 w-8 flex-shrink-0"></div>
                    <div className="p-2 w-8 flex-shrink-0"></div> */}
                    <div className="p-2 w-full">Title</div>
                    <div className="p-2 w-full">Artist</div>
                </div>
                {data.songs.map(song =>
                    <div className="flex border-b border-gray-800 hover:bg-gray-800" key={song.song}>
                        <div className="p-2 w-full">{song.song}</div>
                        <div className="p-2 w-full">{song.artist}</div>
                    </div>
                )}

            </div>
        </div>
    </>
    )

}

export default SongList;
