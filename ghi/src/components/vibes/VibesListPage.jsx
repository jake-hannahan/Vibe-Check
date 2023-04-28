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

    let vibesData;

    const[selectedMood, setSelectedMood] = useState('All')

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
      <div className="bg-gray-900 h-screen">
        <div className=" bg-gray-900 grid justify-center mx-2 grid gap-4 grid-flow-row grid- xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
          <div className="border-4 border-[#C43749] bg-gray-900 text-center row-start-1 row-end-1 col-start-5 col-end-5 p-6 relative w-full lg:max-w-sm ">
            <h2 className="text-white text-left pb-3 font-raleway">
              Pick Mood:
            </h2>
            <select
              onChange={(e) => setSelectedMood(e.target.value)}
              className="flex justify-end bg-gray-900 w-full p-2.5 text-center text-gray-500
              text-white border rounded-md border-green shadow-sm outline-none appearance-none
              hover:bg-[#C43749] hover:text-white font-raleway"
            >
              {moods.map((mood) => (
                <option value={mood.name} key={mood.id}>
                  {mood.name}
                </option>
              ))}
            </select>
          </div>
          <div className="border-4 border-[#C43749] p-10 text-center text-3xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:9xl bg-gray-900 text-white col-start-1 col-end-5 font-megrim">
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-[#C43749]">A</span>
            <span>ll </span>
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-[#C43749]">T</span>
            <span>he </span>
            <span className="text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-[#C43749]">V</span>
            <span>ibes</span>
          </div>
          <div className="border-4 border-[#C43749] p-10 text-bold text-center text-white bg-gray-900 col-start-6 col-end-7 font-raleway">
            Current Mood:
            {"\n"}
            <div>{selectedMood}</div>
          </div>
          <div className="p-5 bg-gray-900 col-start-1 col-end-7 row-start-2">
            <div className="grid justify-center">
              <div className="flex flex-wrap justify-center">{vibesData}</div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default VibesListPage;
