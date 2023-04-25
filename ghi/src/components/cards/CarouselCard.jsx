import React from "react"
import { NavLink } from "react-router-dom"

function CarouselCard(props) {
    const colors = {
        sky: 'bg-sky-700 hover:bg-sky-900',
        teal: 'bg-teal-700 hover:bg-teal-900',
        cyan: 'bg-cyan-700 hover:bg-cyan-900',
        orange: 'bg-orange-700 hover:bg-orange-900',
        yellow: 'bg-yellow-700 hover:bg-yellow-900',
        amber: 'bg-amber-700 hover:bg-amber-900',
        rose: 'bg-rose-700 hover:bg-rose-900',
        lime: 'bg-lime-700 hover:bg-lime-900',
        stone: 'bg-stone-700 hover:bg-stone-900',
        gray: 'bg-gray-700 hover:bg-gray-900',
        violet: 'bg-violet-700 hover:bg-violet-900',
        indigo: 'bg-indigo-700 hover:bg-indigo-900',
    }

    const addDefaultSrc = (e) => {
         e.target.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif'
    }

    // const isValid = props.vibe.picture_url.length > 20
    // console.log(isValid)

    return (
        <>
        <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}>
            <div className={`max-w-xs rounded border-2 border-gray-900 drop-shadow-lg ${colors[props.color]}`}>
                <div className="w-auto h-auto">
                    <img className="w-auto h-auto" onError={addDefaultSrc} src={props.vibe.picture_url} alt="Invalid url" />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-base/loose mb-2">{props.vibe.name}</div>
                </div>
            </div>
        </NavLink>
        </>
    )
}

export default CarouselCard;
