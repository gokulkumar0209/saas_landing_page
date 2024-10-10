import clsx from "clsx";
import React from "react";
import Marker from "./Marker";

function Button({
	icon,
	children,
	href,
	containerClassName,
	onClick,
	markerFill,
}) {
	const Inner = () => (
		<>
			<span className="relative z-30 flex items-center min-h-[60px] px-4 rounded-2xl g4 inner-before  group-hover:before:opacity-100 overflow-hidden">
				<span className="absolute -left-[1px]">
					<Marker markerFill={markerFill} />
				</span>
				{icon && (
					<img
						src={icon}
						alt="circle"
						className=" size-10 mr-5 object-contain z-30"
					></img>
				)}
				<span className="relative z-30 font-poppins base-bold text-p1 uppercase">
					{children}
				</span>
				<span className="glow-before"></span>
				<span className="glow-after"></span>
			</span>
		</>
	);
	return href ? (
		<a
			className={clsx(
				"Z-20 relative p-0.5 g5 rounded-2xl shadow-500 group cursor-pointer",
				containerClassName
			)}
			href={href}
		>
			<Inner />
		</a>
	) : (
		<button
			className={clsx(
				"z-20 relative p-0.5 g5 rounded-2xl shadow-500  group cursor-pointer",
				containerClassName
			)}
			onClick={onClick}
		>
			<Inner />
		</button>
	);
}

export default Button;
