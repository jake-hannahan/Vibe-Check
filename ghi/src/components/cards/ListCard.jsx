import { useNavigate } from "react-router-dom";


function ListCard(props) {
    const navigate = useNavigate();

    const navigateToDetailPage = () => {

      navigate("/account/login");
    };


  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <button onClick={navigateToDetailPage}>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{props.vibe.name}</div>
              <div className="font-bold text-xl mb-2">
                {props.vibe.created_by}
              </div>
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
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default ListCard;
