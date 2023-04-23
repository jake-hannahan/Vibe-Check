import ListCard from "../cards/ListCard";
import { useState } from "react";
import { useGetVibesQuery } from "../../services/vibes";


function VibesListPage() {
    const moods = [
      {id: 1, name: 'Adventurous'},
      {id: 2, name: 'Chill'},
      {id: 3, name: 'Confident'},
      {id: 4, name: 'Destructive'},
      {id: 5, name: 'Dreamy'},
      {id: 6, name: 'Energetic'},
      {id: 7, name: 'Gloomy'},
      {id: 8, name: 'Lazy'},
      {id: 9, name: 'Melancholic'},
      {id: 10, name: 'Productive'},
      {id: 11, name: 'Rejected'},
      {id: 12, name: 'Romantic'},
    ];

    const { data, isLoading, isSuccess, isError, error } = useGetVibesQuery({
    refetchOnMountOrArgChange: true,
  });
  // use the query function in vibes.js to query our backend endpoint and maps through our vibe model objects

    let vibesData;
// declaring a variable to be used later--instantiate or whatever, not sure exactly what is happening
    // let currentMood;


    const[selectedMood, setSelectedMood] = useState('chill')
    // sets initial state of data to load vibes with chill mood

    const filteredData = () => {
    return data.filter((vibe) => vibe.mood.toLowerCase().includes(selectedMood.toLowerCase()));
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
        return <ListCard vibe={vibe} />;
      });
    } else if (isError) {
      vibesData = <div className="alert alert-danger">{error}</div>;
    }

      // if (isLoading) {
      //   currentMood = (
      //     <div className="d-flex justify-content-center">
      //       <div className="spinner-border">
      //         <span className="visually-hidden">Loading...</span>
      //       </div>
      //     </div>
      //   );
      // } else if (isSuccess) {
      //   currentMood = filteredData().map((vibe) => {
      //     return <div {...vibe.mood} />;
      //   });
      // } else if (isError) {
      //   vibesData = <div className="alert alert-danger">{error}</div>;
      // }






//   const filterByDepartment = department => {
    // setFilteredMoods(
    //   moods.filter(mood => mood name === name)
    // )

    return (
      // needs text that shows applied filter type
      // but default filter is most recent vibes

      // needs large filter button to the left that has a dropdown of moods and recent moods

      // needs to load all on first load, then load according to mood...will use listcard somehow here

      // needs scrollbar

      <div className="p-5 bg-black">
        <div className="grid grid-cols-6 gap-4 grid-flow-row grid-">
          <div className="p-5 text-center bg-white row-start-1 row-end-3">
            <div className="relative w-full lg:max-w-sm">
              <select onChange={e => setSelectedMood(e.target.value)} className="w-full p-2.5 text-gray-500
              bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Pick a Mood</option>
                {moods.map((mood) => (
                  <option value={mood.name} key={mood.id}>{mood.name}</option>
                ))}
                </select>
              <div>
                <h2 className="mb-2 text-lg text-left font-semibold text-gray-900 dark:text-black pt-12">
                  Recent ~moods~
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 text-left">
                  <li>Chill</li>
                  <li>Dreamy</li>
                  <li>Lazy</li>
                  <li>Gloomy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-5 text-center bg-white col-start-2 col-end-5 font-extrabold">
            VIBES IN YOUR FACE
          </div>
          <div className="p-5 text-center bg-white col-start-5 col-end-7">
            {/* {currentMood} */}
          </div>
          <div className="p-5 text-center bg-white col-start-2 col-end-7 row-start-2 row-end-auto">
            {vibesData}

          </div>
        </div>
      </div>
    );
};


export default VibesListPage;
