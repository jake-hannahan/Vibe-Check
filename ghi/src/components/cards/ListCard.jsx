import { NavLink } from "react-router-dom";




function ListCard(props) {


    const moodColorMap = {
      chill:
        "bg-gradient-to-r bg-gradient-to-t from-orange-400 to-bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300-400from-blue-400 to-emerald-400",
      lazy:
        "bg-teal-4radial-gradient(at center center, rgb(55, 65, 81), rgb(51, 65, 85), rgb(112, 26, 117))00",
      dreamy:
        "bg-gradient-to-r from-green-300 to-purple-400",
      productive:
        "bg-gradient-to-r from-yellow-600 to-red-600",
      adventurous:
        "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
      confident:
        "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300",
      romantic:
        "bg-gradient-to-r from-fuchsia-600 to-pink-600",
      energetic:
        "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-200 via-emerald-100 to-emerald-500",
      destructive:
        "bg-gradient-to-r from-slate-500 to-yellow-100",
      gloomy:
        "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
      rejected:
        "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300",
      melancholic:
        "bg-gradient-to-r from-violet-300 to-violet-400",
    };

  const moodColor =
    moodColorMap[props.vibe.mood.toLowerCase()] || "bg-gray-400";

  const addDefaultSrc = (e) => {
    e.target.src =
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif";
  };



  return (
    <>
      <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}>
        <div
          className={`col-span-1 grid grid-rows-4 w-60 md:w-52
          lg:w-56 xl:w-60 h-72 lg:h-80 xl:h-80 rounded-l
          shadow-md shadow-indigo-800 m-4 ${moodColor}`}
        >
          <img
            className="row-span-3 object-cover h-full max-h-48 w-full rounded-l"
            onError={addDefaultSrc}
            src={props.vibe.picture_url}
            alt="Invalid url"
          />
          <div className="relative h-full bottom-5 pl-2 overflow-y-scroll">
            <h1 className="font-bold text-xl">{props.vibe.name}</h1>
            <h2 className="text-sm">
              {props.vibe.activities.map((activity) => (
                <div key={activity.name}>
                  <div className="text-sm mb-2">
                    {activity.category}
                  </div>
                  <div className="text-sm mb-2">{activity.name}</div>
                </div>
              ))}
            </h2>
            <p className="text-sm">{props.vibe.created_by}</p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default ListCard;
