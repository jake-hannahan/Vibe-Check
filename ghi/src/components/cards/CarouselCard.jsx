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
    return (
        <>
        <div className={`max-w-xs rounded border-2 border-gray-900 drop-shadow-lg overflow-hidden ${colors[props.color]} p-8 mt-3`}>
            <div className="w-32 h-32 mx-auto">
                <img className="w-full h-full" src={props.vibe.picture_url} alt="Invalid url" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.vibe.name}</div>
            </div>
        </div>
        </>
    )
}

export default CarouselCard;
