import React from "react"

function CarouselCard(props) {
    const colors = {
        sky: 'bg-sky-700',
        teal: 'bg-teal-700',
        cyan: 'bg-cyan-700',
        orange: 'bg-orange-700',
        yellow: 'bg-yellow-700',
        amber: 'bg-amber-700',
        rose: 'bg-rose-700',
        lime: 'bg-lime-700',
        stone: 'bg-stone-700',
        gray: 'bg-gray-700',
        violet: 'bg-violet-700',
        indigo: 'bg-indigo-700',
    }

    const addDefaultSrc = (e) => {
         e.target.src = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif'
    }

    // const isValid = props.vibe.picture_url.length > 20
    // console.log(isValid)

    return (
        <>
        <div className={`max-w-xs rounded border-2 border-gray-900 drop-shadow-lg ${colors[props.color]}`}>
            <div className="w-auto h-auto">
                <img className="w-auto h-auto" onError={addDefaultSrc} src={props.vibe.picture_url} alt="Invalid url" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-base/loose mb-2">{props.vibe.name}</div>
            </div>
        </div>
        </>
    )
}

export default CarouselCard;
