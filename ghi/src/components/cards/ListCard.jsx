import { useNavigate } from "react-router-dom";


function ListCard(props) {
    const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/detail");
  };


  return (
    <>
      <div
        onClick={handleClick}
        className="container my-12 mx-auto px-4 md:px-12"
      >
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  className="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-sm">
                  <a className="no-underline text-black">
                    {props.vibe.playlist_id}
                  </a>
                </h1>
              </header>
              <h2 className="text-sm">
                {props.vibe.activities.map((activity) => (
                  <>
                    <div className="text-sm mb-2">{activity.category} </div>
                    <div className="text-sm mb-2">{activity.name}</div>
                  </>
                ))}
              </h2>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  className="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <p className="ml-1 text-sm">{props.vibe.created_by}</p>
                </a>
                <a
                  className="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <button onClick={navigateToDetailPage}>
          <div className="overflow-hidden shadow-lg">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.vibe.name}</div>
            </div>

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {props.vibe.playlist_id}
              </div>
              {props.vibe.activities.map((activity) => (
                <>
                  <div className="font-bold text-xl mb-2">
                    {activity.category}{" "}
                  </div>
                  <div className="font-bold text-xl mb-2">{activity.name}</div>
                </>
              ))}
              <div className="ml-2 text-sm">
                {props.vibe.created_by}</div>
            </div>
          </div>
        </button>
      </div> */}
    </>
  );
}

export default ListCard;
