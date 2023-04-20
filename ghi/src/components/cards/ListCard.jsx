// import React from "react";

import { useGetVibesQuery } from "../../services/vibes";

function ListCard(props) {
  const { data, isLoading } = useGetVibesQuery;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg p-8">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vibe Name</div>
            <div className="font-bold text-xl mb-2">Creator</div>
          </div>
          <div className="w-32 h-32 mx-auto">
            <img
              className="w-full h-full"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmU0ZjdlNTExN2VmZTE0OGY0YzZjYWM5NzY3MmYxYjc4OTkwNjZhNSZjdD1n/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Playlist Name</div>
            <div className="font-bold text-xl mb-2">Activities</div>
          </div>
        </div>

        {data.vibes.map((vibe) => (
          <div
            className="max-w-xs rounded overflow-hidden shadow-lg p-8"
            key={vibe.vibe}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{vibe.name}</div>
              <div className="font-bold text-xl mb-2">{vibe.created_by}</div>
            </div>
            <div className="w-32 h-32 mx-auto">
              <img
                className="w-full h-full"
                src={vibe.picture_url}
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{vibe.playlist_id}</div>
              <div className="font-bold text-xl mb-2">{vibe.activites}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListCard;
