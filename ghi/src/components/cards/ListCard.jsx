import { NavLink } from "react-router-dom";

function ListCard(props) {
  const moodColorMap = {
    chill:
      "bg-gradient-to-r bg-gradient-to-t from-orange-400 to-bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300-400from-blue-400 to-emerald-400",
    lazy: "bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500",
    dreamy: "bg-gradient-to-r from-green-300 to-purple-400",
    productive: "bg-gradient-to-r from-yellow-600 to-red-600",
    adventurous: "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
    confident:
      "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300",
    romantic: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
    energetic:
      "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-200 via-emerald-100 to-emerald-500",
    destructive: "bg-gradient-to-r from-slate-500 to-yellow-100",
    gloomy:
      "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400bg-gradient-to-r from-purple-200 via-purple-400-purple-800",
    rejected:
      "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300",
    melancholic: "bg-gradient-to-r from-violet-300 to-violet-400",
  };

  const moodColor =
    moodColorMap[props.vibe.mood.toLowerCase()] || "bg-gray-400";

  const addDefaultSrc = (e) => {
    e.target.src =
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif";
  };

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replace(/_/g, " ");
  };

  return (
    <>

        <div className="group relative mx-1">
          <img
            className="h-auto max-w-full object-cover rounded-2xl mb-14"
            onError={addDefaultSrc}
            src={props.vibe.picture_url}
            alt="Invalid url"
          />
          <div
            className={`absolute top-0 rounded-2xl left-0 w-full h-0 flex
                  flex-col justify-center items-center ${moodColor} opacity-0
                  group-hover:h-full group-hover:opacity-100 duration-500`}
          >
            <h1 className="md:text-md lg:text-lg xl:text-xl 2xl:text-3xl pt-10 px-2 pb-4 text-black text-center">
              {" "}
              {capitalize(props.vibe.name)}
            </h1>
            <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}
              className="px-8 py-3 rounded-full bg-[#C43749] hover:bg-amber-600 duration-300"
            >
              Vibe Detail
            </NavLink>
          </div>
        </div>

    </>
  );
}

export default ListCard;
