import team from "../../static/team.png";
import Footer from "../cards/Footer";

function Team() {
	return (
		<>
			<div className="h-[calc(2.5rem)]"></div>
			<div className="h-[calc(100vh-2.5rem)] bg-neutral-900">
				<h1 className="text-center text-2xl">🤙❤️</h1>
				<h1 className="text-center text-5xl text-white -mb-36 mt-4">🤙❤️</h1>
				<img className="h-full w-full p-40" src={team} alt="team" />
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</>
	);
}

export default Team;
