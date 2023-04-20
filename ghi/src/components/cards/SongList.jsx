import React from "react";
// import { useGetPlaylistQuery } from "../../services/spotify";
// import { Link } from 'react-router-dom';

function SongList(props) {
	// const { data, isLoading } = useGetPlaylistQuery(props);
	// if (isLoading) return <div>Loading...</div>;
	return (
		<>
			<iframe
				style={{ borderRadius: "12px", height: "100%" }}
				src={`https://open.spotify.com/embed/playlist/${props.spotifyId}?utm_source=generator`}
				width="100%"
				frameBorder="0"
				allowFullScreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
				title="test"
			></iframe>
		</>
	);
}

export default SongList;

// Our original plain code
{
	/*
    <div className="bg-black flex items-center justify-end top-0 right-0 z-10 pt-4 pr-12">
        <Link
            to={`https://open.spotify.com/playlist/${props.spotifyId}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="bg-blue-700 hover:bg-blue-700 text-gray-300 font-bold py-2 px-4 rounded">
                Link to playlist
            </button>
        </Link>
    </div>
    <div className="bg-black text-gray-300 min-h-screen p-1 mt-0">
        <div className="mt-0">
            <div className="flex text-gray-200 underline font-extrabold">
                <div className="p-2 w-full">Title</div>
                <div className="p-2 w-full">Artist</div>
            </div>
            {data.songs.map((song) => (
                <div className="flex border-b border-gray-800 hover:bg-gray-800" key={song.song}>
                    <div className="p-2 w-full">{song.song}</div>
                    <div className="p-2 w-full">{song.artist}</div>
                </div>
            ))}
        </div>
    </div>
*/
}
