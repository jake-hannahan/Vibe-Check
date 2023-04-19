import ListCard from "../cards/ListCard";

function VibesListPage() {
    return (
      // navbar auto added in app.jsx

      // needs header type to introduce page purpose
      // needs text that shows applied filter type
      // but default filter is most recent vibes

      // needs large filter button to the left that has a dropdown of moods and recent moods

      // needs to load all on first load, then load according to mood...will use listcard somehow here

      // needs scrollbar

      <div class="p-5 bg-black">
        <div class="grid grid-cols-6 gap-4 grid-flow-row grid-">
          <div class="p-5 text-center bg-white row-start-1 row-end-3">A</div>
          <div class="p-5 text-center bg-white col-start-2 col-end-5 font-extrabold">
            VIBES IN YOUR FACE
          </div>
          <div class="p-5 text-center bg-white col-start-5 col-end-7">
            Current schmood
          </div>
          <div class="p-5 text-center bg-white col-start-2 col-end-7 row-start-2 row-end-auto">
            E
            <ListCard />
          </div>
        </div>
      </div>
    );
};


export default VibesListPage;
