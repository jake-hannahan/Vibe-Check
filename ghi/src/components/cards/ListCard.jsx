import { NavLink } from "react-router-dom";




function ListCard(props) {


    const moodColorMap = {
      chill:
        "bg-gradient-to-r bg-gradient-to-t from-orange-400 to-bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300-400from-blue-400 to-emerald-400",
      lazy: "bg-teal-4radial-gradient(at center center, rgb(55, 65, 81), rgb(51, 65, 85), rgb(112, 26, 117))00",
      dreamy: "bg-gradient-to-r from-green-300 to-purple-400",
      productive: "bg-gradient-to-r from-yellow-600 to-red-600",
      // productive: "bg-gray-800 text-white shadow-emerald-200",

      adventurous: "bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400",
      confident:
        "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300",
      romantic: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
      energetic:
        "bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-200 via-emerald-100 to-emerald-500",
      destructive: "bg-gradient-to-r from-slate-500 to-yellow-100",
      gloomy:
        "bg-gray-400bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r",
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

  return (
    <>
      <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}>
        {/* <div className="grid grid-cols-6 gap-4 grid-flow-row grid-"> */}

        <div className="container my-12 mx-1 pt-6 px-3 md:px-12 hover:animate-pulse">
          {/* <div className={`flex flex-wrap -mx-1 lg:-mx-1 h-auto w-96 2xl:w-64 ${moodColor}`}> */}
          <div className="flex flex-wrap -mx-1 lg:-mx-1 h-auto w-96 2xl:w-64">
            {/* <div className="my-1 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> */}
            <article
              className={`overflow-hidden rounded-lg shadow-lg shadow-zinc-900 ${moodColor}`}
              onError={addDefaultSrc}
            >
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src={props.vibe.picture_url}
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-3 md:p-12">
                <h1 className="text-lg">
                  <a className="no-underline text-black">{props.vibe.name}</a>
                </h1>
              </header>
              <h2 className="text-sm">
                {props.vibe.activities.map((activity) => (
                  <>
                    <div className="text-sm mb-2">{activity.category} </div>
                    <div className="text-sm mb-2">{activity.name}</div>
                  </>
                ))}
              </h2>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black">
                  <p className="ml-8 text-sm">{props.vibe.created_by}</p>
                </a>
              </footer>
            </article>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </NavLink>
    </>
  );
}

export default ListCard;
