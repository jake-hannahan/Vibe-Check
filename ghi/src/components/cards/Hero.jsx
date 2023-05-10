import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import { ReactComponent as Logo } from "../../static/logo-no-background.svg";

const Hero = () => {
	const [vanta, setVanta] = useState(null);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vanta) {
			setVanta(
				HALO({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					backgroundColor: 0x0,
				})
			);
		}
		return () => {
			if (vanta) vanta.destroy();
		};
	}, [vanta]);

	return (
		<>
			<div className="w-full h-[calc(4.5rem)]"></div>
			<div className="w-full h-[calc(100vh-4.5rem)] fixed -z-20" ref={myRef}>
				<div className="relative top-0 left-0 bg-slate-500/20 w-full h-[calc(100vh-4.5rem)] grid grid-rows-4 items-center justify-center">
					<div className="row-span-2 flex flex-col align-bottom">
						<div className="h-10 -mb-56">
							<Logo />
							<h2 className="relative top-10 left-10 text-center text-3xl tracking-widest text-white">
								A <span className="text-[#C43749]">feeling</span>. A{" "}
								<span className="text-[#C43749]">sensation</span>. An{" "}
								<span className="text-[#C43749]">emotion</span>. An{" "}
								<span className="text-[#C43749]">experience</span>.
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
