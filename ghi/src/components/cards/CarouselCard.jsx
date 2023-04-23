function CarouselCard(props) {
    return (
        <>
        <div className="max-w-xs rounded overflow-hidden bg-blue-600 shadow-lg p-8 mt-3">
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
