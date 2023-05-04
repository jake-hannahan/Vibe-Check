const TipMessage = () => (
	<span
		className={`bg-gray-800 text-sm text-gray-100 rounded-md absolute -right-5
					translate-x-full m-4 mx-auto font-raleway py-2 px-2 w-[20rem]`}
	>
		<h1 className="text-center underline underline-offset-4">Finding the Spotify Playlist ID</h1>
		<br />
		<h1 className="text-center">
			Enter the playlist page, click the (...) button near the play button, and click "Share: Copy Spotify URI".
		</h1>
		<h1 className="text-center">The playlist ID is the string right after "spotify:playlist:".</h1>
	</span>
);

export default TipMessage;
