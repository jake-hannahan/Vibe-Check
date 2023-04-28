import React from "react";
import SongList from "./SongList";
import { NavLink, useNavigate } from "react-router-dom";
import { useDeleteVibeMutation } from "../../services/vibes";

function MyVibesCard(props) {
  const [deleteVibe] = useDeleteVibeMutation();
  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/_/g, " ");
  };


  const navigate = useNavigate();

  const moodColorMap = {
    Chill: {
      shadowColor: "shadow-sky-500",
      hoverColor: "hover:bg-sky-200",
      color: "bg-sky-400",
      darkColor: "bg-sky-500",
      textColor: "text-sky-900",
    },
    Lazy: {
      shadowColor: "shadow-teal-500",
      hoverColor: "hover:bg-teal-200",
      color: "bg-teal-400",
      darkColor: "bg-teal-500",
      textColor: "text-teal-900",
    },
    Dreamy: {
      shadowColor: "shadow-cyan-500",
      hoverColor: "hover:bg-cyan-200",
      color: "bg-cyan-400",
      darkColor: "bg-cyan-500",
      textColor: "text-cyan-900",
    },
    Productive: {
      shadowColor: "shadow-orange-500",
      hoverColor: "hover:bg-orange-200",
      color: "bg-orange-400",
      darkColor: "bg-orange-500",
      textColor: "text-orange-900",
    },
    Adventurous: {
      shadowColor: "shadow-yellow-500",
      hoverColor: "hover:bg-yellow-200",
      color: "bg-yellow-400",
      darkColor: "bg-yellow-500",
      textColor: "text-yellow-900",
    },
    Confident: {
      shadowColor: "shadow-amber-500",
      hoverColor: "hover:bg-amber-200",
      color: "bg-amber-400",
      darkColor: "bg-amber-500",
      textColor: "text-amber-900",
    },
    Romantic: {
      shadowColor: "shadow-rose-500",
      hoverColor: "hover:bg-rose-200",
      color: "bg-rose-400",
      darkColor: "bg-rose-500",
      textColor: "text-rose-900",
    },
    Energetic: {
      shadowColor: "shadow-lime-500",
      hoverColor: "hover:bg-lime-200",
      color: "bg-lime-400",
      darkColor: "bg-lime-500",
      textColor: "text-lime-900",
    },
    Destructive: {
      shadowColor: "shadow-stone-500",
      hoverColor: "hover:bg-stone-200",
      color: "bg-stone-400",
      darkColor: "bg-stone-500",
      textColor: "text-stone-900",
    },
    Gloomy: {
      shadowColor: "shadow-gray-500",
      hoverColor: "hover:bg-gray-200",
      color: "bg-gray-400",
      darkColor: "bg-gray-500",
      textColor: "text-gray-900",
    },
    Rejected: {
      shadowColor: "shadow-violet-500",
      hoverColor: "hover:bg-violet-200",
      color: "bg-violet-400",
      darkColor: "bg-violet-500",
      textColor: "text-violet-900",
    },
    Melancholic: {
      shadowColor: "shadow-indigo-500",
      hoverColor: "hover:bg-indigo-200",
      color: "bg-indigo-400",
      darkColor: "bg-indigo-500",
      textColor: "text-indigo-900",
    },
  };

  const moodColor = moodColorMap[props.vibe.mood].color || "bg-gray-400";
  const moodNameBackgroundColor =
    moodColorMap[props.vibe.mood].darkColor || "bg-gray-500";
  const moodTextColor =
    moodColorMap[props.vibe.mood].textColor || "text-gray-900";
  const moodHoverColor =
    moodColorMap[props.vibe.mood].hoverColor || "hover:bg-gray-200";
  const moodShadowColor =
    moodColorMap[props.vibe.mood].shadowColor || "shadow-gray-500";

  return (
    <>
      <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}>
        <div
          className={`justify-center mx-auto p-4 box-content h-96 max-w-8xl overscroll-contain rounded-lg transform transition duration-300 shadow-xl ${moodShadowColor} ${moodColor} ${moodHoverColor}`}
        >
          <div
            className="grid grid-cols-2 w-full h-full space-x-2"
            key={props.vibe.id}
          >
            {/* Left side of the card */}
            <div
              className={`relative p-2 w-full font-raleway font-bold text-black text-3xl md:text-xl lg:text-xl text-clip overflow-hidden space-y-4 ${moodTextColor}`}
            >
              {capitalize(props.vibe.name)}
              {/* Mood box */}
              <div
                className={`relative left-0 top-2 p-2 w-full tracking-wider text-2xl md:text-lg lg:text-lg xl:text-xl text-black text-center rounded-lg ${moodNameBackgroundColor} ${moodTextColor} hover:${moodColor}`}
              >
                {props.vibe.mood}
              </div>
              {/* Activity box */}
              <ul className="absolute pt-4 right-10 left-10 max-h-48 max-w-prose text-base md:text-sm lg:text-base xl:text-lg text-black text-center overflow-hidden overflow-y-auto divide-y divide-gray-400 divide-opacity-25">
                {props.vibe.activities.map((activity) => (
                  <li key={activity.name} className="p-2 max-w-prose">
                    <span className="text-black">{activity.category}</span>
                    <br />
                    <span className="text-gray-700">
                      {capitalize(activity.name)}
                    </span>
                  </li>
                ))}
              </ul>
              {/* Buttons box */}
              <ul className="absolute bottom-0 left-3 flex justify-center mt-auto gap-x-6 text-base">
                <li>
                  <button
                    className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/edit", { state: { vibe: props.vibe } });
                    }}
                  >
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteVibe(props.vibe.id);
                      navigate("/my", { state: { vibe: props.vibe } });
                    }}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </div>
            {/* Songlist box */}
            <div className="overflow-hidden overflow-y-auto float-right rounded-lg w-full h-full grow">
              <SongList spotifyId={props.vibe.spotify_id} />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default MyVibesCard;
