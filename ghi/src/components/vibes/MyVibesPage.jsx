import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import MyVibesCard from "../cards/MyVibeCard";

function MyVibesPage() {
  const { data, isLoading } = useGetVibesByCreatorQuery();
  if (isLoading) return <div>Loading...</div>;
  const rows = Math.ceil(data.length / 3);

  return (
    <div className="grid justify-center">
      <div className="container text-center p-4 text-7xl text-white font-bold rounded-md p-3 my-6 font-megrim tracking-wide">
        <h1>
          <span className="text-8xl text-[#C43749]">M</span>
          <span className="">Y</span>
          <span className="text-8xl text-[#C43749]">V</span>
          <span className="">ibes</span>
        </h1>
      </div>
      {/* loop through each row */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          className="grid container gap-4 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 w-content"
          key={i}
        >
          {/* display up to 3 items in each row */}
          {data.slice(i * 3, i * 3 + 3).map((vibe) => (
            <div className="mx-1 mb-4" key={vibe.id}>
              <MyVibesCard vibe={vibe} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MyVibesPage;
