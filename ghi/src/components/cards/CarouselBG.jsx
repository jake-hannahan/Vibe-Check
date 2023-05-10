import React, { useState, useEffect, useRef } from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

const CarouselBG = () => {
	const [vanta, setVanta] = useState(null);
	const myRef = useRef(null);

	useEffect(() => {
		if (!vanta) {
			setVanta(
				TOPOLOGY({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0xcc43749,
					backgroundColor: 0xd9c2c2,
				})
			);
		}
		return () => {
			if (vanta) vanta.destroy();
		};
	}, [vanta]);

	return (
		<>
			<div className="w-full h-[calc(100vh-4.5rem)]" ref={myRef}></div>
		</>
	);
};

export default CarouselBG;
