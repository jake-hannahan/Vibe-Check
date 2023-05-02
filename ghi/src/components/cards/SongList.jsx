import React from "react";

function SongList(props) {
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
