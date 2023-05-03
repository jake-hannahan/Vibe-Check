import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../static/logo-no-background.svg";
import { ReactComponent as GitlabLogo } from "../../static/gitlab-icon.svg";
import "../../App.css";

const Footer = () => {
	return (
		<>
			<div className="grid gap-3 text-white py-4">
				<div className="grid grid-cols-3 gap-3">
					<div className="flex align-middle items-center justify-around">
						<h2>Tech Stack</h2>
					</div>
					<div className="flex align-middle items-center justify-around">
						<h2>The Vibe Check Team</h2>
					</div>
					<div className="flex align-middle items-center justify-around">
						<a href="https://gitlab.com/vibe-check/vibe-check" target="_blank" rel="noopener noreferrer">
							<GitlabLogo className="h-auto w-12" />
						</a>
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="flex align-middle items-center justify-center gap-3">
						<h3>© 2023 VibeCheck™</h3>
					</div>
					<div className="flex align-middle items-center justify-center">
						<NavLink to="/">
							<Logo className="h-auto w-56" />
						</NavLink>
					</div>
					<div className="flex align-middle items-center justify-center gap-3">
						<h3>Hack Reactor</h3>
						<h3>•</h3>
						<h3>SJP Dec CT 2022</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
