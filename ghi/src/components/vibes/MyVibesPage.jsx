import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import MyVibesCard from "../cards/MyVibeCard";


function MyVibesPage() {
    
    const { data, isLoading } = useGetVibesByCreatorQuery();
    if (isLoading) return <div>Loading...</div>
    const rows = Math.ceil(data.length/3);
    

    return(
        
        <div className="flex flex-wrap justify-center">
                {/* loop through each row */}
                {Array.from({ length: rows }).map((_, i) => (                
                <div className="flex justify-center" key={i}>

                    {/* display up to 3 items in each row */}
                    {data.slice(i * 3, i * 3 + 3).map((vibe) => (
                                
                        <div className="mx-1 mb-4" key={vibe.id}>
                            <MyVibesCard vibe={vibe}/>
                        </div>

                            ))}
                        
                </div>
                        ))}
        </div>
            );
        }


export default MyVibesPage;