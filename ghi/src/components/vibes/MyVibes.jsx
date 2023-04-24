import React from "react";
import { useGetVibesByCreatorQuery } from "../../services/vibes";
import MyVibesCard from "../cards/MyVibeCard";


function MyVibes() {
    
    const { data, isLoading } = useGetVibesByCreatorQuery();
    if (isLoading) return <div>Loading...</div>
    console.log(data)
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

//     return (
//         <>
//             <div className="flex flex-wrap justify-center border-2 border-sky-500">
//                 <div className="flex flex-wrap justify-center">
//                         {rows.map((row) => (
//                             <div className="flex flex-col p-4" key={row}>
//                                 {data.slice(row * 3, row * 3 + 3).map((vibe) => (
//                                     <MyVibesCard vibe={vibe} key={vibe.id}/>
//                                 ))}
//                             </div>
//                         ))}
//                 </div>
//                 {data.map((vibe) => (
//                     <div className="flex flex-col p-4 pb-1 border-2 border-red-500" key={vibe.id}>
//                         <MyVibesCard vibe={vibe}/>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

export default MyVibes;

// grid grid-cols-3 gap-4 p-1 grid-flow-row gap-1 h-screen 