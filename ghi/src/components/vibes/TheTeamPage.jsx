import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGitlab } from "react-icons/fa";
import JayPicture from "../../static/JayProfile.jpg";
import ShaunPicture from "../../static/ShaunProfile.jpg";
import JakePicture from "../../static/JakeProfile.jpg";
import AlanaPicture from "../../static/AlanaProfile.png";
import Footer from "../cards/Footer";

function TheTeamPage() {
	const team = [
		{
			name: "Jay Shastri",
			picture: JayPicture,
			description:
				"Proficient Full-stack developer with expertise in building robust, authenticated web applications using modern technologies and frameworks.",
			linkedIn: "https://www.linkedin.com/in/jay-shastri",
			gitlab: "https://gitlab.com/jayshastri20",
		},
		{
			name: "Jake Hannahan",
			picture: JakePicture,
			description:
				"Knowledgeable Full-stack developer with expertise in creating seamless, user-friendly, and powerful dynamic web applications.",
			linkedIn: "https://www.linkedin.com/in/jakehannahan/",
			gitlab: "https://gitlab.com/jake-hannahan",
		},
		{
			name: "Shaun Ragasa",
			picture: ShaunPicture,
			description:
				"Knowledgeable Full-stack developer with expertise in frontend technologies and a talent for creating efficient and effective code.",
			linkedIn: "https://www.linkedin.com/in/shaunragasa/",
			gitlab: "https://gitlab.com/sragasadev",
		},
		{
			name: "Alana Torrez",
			picture: AlanaPicture,
			description:
				"Proficient Full-stack developer with expertise in both backend technologies, and a dedication to creating user-friendly applications.",
			linkedIn: "https://www.linkedin.com/in/alana-torrez/",
			gitlab: "https://gitlab.com/PenaltyPylon",
		},
	];

	return (
		<div>
			<div className="h-[calc(2.5rem)]"></div>
			<NavLink to={{ pathname: "/teampic" }}>
				<div className="h-[calc(10rem)] box-border mt-8 bg-neutral-900 flex w-full justify-center items-center text-center p-4 text-8xl text-white font-bold font-megrim tracking-widest">
					<h1>
						<span className="text-9xl text-[#C43749]">T</span>
						<span className="">he</span>
						<span className="text-9xl text-[#C43749]">T</span>
						<span className="">eam</span>
						<span className="text-9xl text-[#C43749]">T</span>
						<span className="">itans</span>
					</h1>
				</div>
			</NavLink>

			<div className="h-[calc(100vh-12.5rem)] p-8 grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 text-white bg-neutral-900">
				{team.map((member) => (
					// Member Card
					<div
						className="bg-neutral-900 rounded-lg shadow-xl shadow-[#C43749] border-2 border-[#C43749] p-6 m-6"
						key={member.name}
					>
						<div className="border-2 border-[#C43749] h-96 rounded">
							<img src={member.picture} alt={member.name} className="w-full h-full object-cover" />
						</div>
						<div className="pt-4 pb-4 text-center font-raleway font-bold tracking-widest text-2xl md:text-xl lg:text-xl xl:text-2xl text-red-500">
							{member.name}
						</div>
						<div className="text-center text-lg md:text-md lg:text-md xl:text-lg tracking-wide">
							{member.description}
						</div>
						{/* LinkedIn and GitLab links  */}
						<div className="relative flex justify-center items-center h-20 pt-12 pb-6">
							<div className="text-7xl md:text-6xl lg:text-6xl xl:text-7xl pr-8 text-blue-400 hover:text-blue-200">
								<a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
									<FaLinkedin />
								</a>
							</div>
							<div className="text-7xl md:text-6xl lg:text-6xl xl:text-7xl pl-8 text-orange-500 hover:text-orange-300">
								<a href={member.gitlab} target="_blank" rel="noopener noreferrer">
									<FaGitlab />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full bg-neutral-900 box-border border-t-4 border-[#C43749]">
				<Footer />
			</div>
		</div>
	);
}

export default TheTeamPage;
