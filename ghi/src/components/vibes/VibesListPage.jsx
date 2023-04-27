import ListCard from "../cards/ListCard";
import { useState } from "react";
import { useGetVibesQuery } from "../../services/vibes";


function VibesListPage() {
    const moods = [
      { id: 1, name: "All" },
      { id: 2, name: "Adventurous" },
      { id: 3, name: "Chill" },
      { id: 4, name: "Confident" },
      { id: 5, name: "Destructive" },
      { id: 6, name: "Dreamy" },
      { id: 7, name: "Energetic" },
      { id: 8, name: "Gloomy" },
      { id: 9, name: "Lazy" },
      { id: 10, name: "Melancholic" },
      { id: 11, name: "Productive" },
      { id: 12, name: "Rejected" },
      { id: 13, name: "Romantic" },
    ];

    const { data, isLoading, isSuccess, isError, error } = useGetVibesQuery({
    refetchOnMountOrArgChange: true,
  });
  // use the query function in vibes.js to query our backend endpoint and maps through our vibe model objects

    let vibesData;
// declaring a variable to be used later--instantiate or whatever, not sure exactly what is happening
    // let currentMood;

    const[selectedMood, setSelectedMood] = useState('All')
    // sets initial state of data to load vibes with chill mood
        // const[changeColor, setChangeColor] = useState(false)
    // const[moodDisplay, setMoodDisplay] = useState('chill')

    const filteredData = () => {
    if (selectedMood === "All") {
    return data
  }
    else {
      return data.filter((vibe) =>
      vibe.mood.toLowerCase().includes(selectedMood.toLowerCase())
      );
  }
};




    if (isLoading) {
      vibesData = (
        <div className="d-flex justify-content-center">
          <div className="spinner-border">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else if (isSuccess) {
      vibesData = filteredData().map((vibe) => {
        return <ListCard vibe={vibe} key={vibe.id}/>;
      });
    } else if (isError) {
      vibesData = <div className="alert alert-danger">{error}</div>;
    }

    return (
      // <div
      //   className="border-4 border-red-500 p-5 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]
      //     from-emerald-800 via-indigo-900 to-zinc-900"
      //    >
      //   <div className="border-4 border-red-500 grid gap-4 grid-flow-row grid- xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      //     <div className="border-4 border-red-500 p-5 text-center bg-white row-start-1 row-end-1 col-start-5 col-end-5">
      //       <div className="border-4 border-red-500 p-5 relative w-full lg:max-w-sm ">
      //         <select
      //           onChange={(e) => setSelectedMood(e.target.value)}
      //           className="flex justify-end w-full p-2.5 text-center text-gray-500
      //         bg-white border rounded-md border-black shadow-sm outline-none appearance-none
      //         hover:bg-indigo-900 hover:text-white"
      //         >
      //           <option>Pick a Mood</option>
      //           {moods.map((mood) => (
      //             <option value={mood.name} key={mood.id}>
      //               {mood.name}
      //             </option>
      //           ))}
      //         </select>
      //       </div>
      //     </div>
      //     <div className="border-4 border-red-500 p-9 text-center 2xl:text-6xl text-4xl bg-white col-start-1 col-end-5 italic font-effect-neon">
      //       VIBES FOR LIFE
      //     </div>
      //     <div className="border-4 border-red-500 p-10 text-bold text-center bg-white col-start-6 col-end-7">
      //       Current Mood:
      //       {"\n"}
      //       <div>{selectedMood}</div>
      //     </div>
          // <div className="border-4 border-green-500 p-5 text-center 2xl:h-auto bg-white col-start-1 col-end-7 row-start-2 row-end-auto col-auto">
              <div className="border-4 border-orange-500 flex flex-wrap">
                {vibesData}
              </div>
          // </div>
      //   // </div>
      // </div>
    );
};


export default VibesListPage;
