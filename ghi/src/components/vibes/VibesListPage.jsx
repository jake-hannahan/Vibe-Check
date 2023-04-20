import ListCard from "../cards/ListCard";

function VibesListPage() {
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
              <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Pick a Mood</option>
                <option>Adventurous</option>
                <option>Chill</option>
                <option>Confident</option>
                <option>Destructive</option>
                <option>Dreamy</option>
                <option>Energetic</option>
                <option>Gloomy</option>
                <option>Lazy</option>
                <option>Melancholic</option>
                <option>Productive</option>
                <option>Rejected</option>
                <option>Romantic</option>
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
            Current schmood!!!
          </div>
          <div className="p-5 text-center bg-white col-start-2 col-end-7 row-start-2 row-end-auto">
            <ListCard />
          </div>
        </div>
      </div>
    );
};


export default VibesListPage;
