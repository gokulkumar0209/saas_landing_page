import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import clsx from "clsx";
function Hero() {
	return (
		<section
			className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36
             max-md:pt-36 max-md:pb-32 z-10"
		>
			<Element name="hero">
				<div className="container relative">
					<div className="relative z-20 max-w-512 max-lg:max-w-388">
						<div className="caption ">Video Editing</div>
						<h1 className="h2 max-lg:h3 max-md:h4   mb-6 h2 text-p4 uppercase max-lg:mb-7 max-lg:h3 max-md:mb-4 max-md:text-5xl max-md:leading-12 ">
							Edit, Create, Captivate!
						</h1>
						<p className=" capitalize max-md:text-sm max-lg:text-[20px] max-w-440 mb-14 body-1 max-md:mb-10">
							REEL AI Video Editor combines simplicity with robust features,
							making it effortless to use and quick to master. Unleash your
							creativity and transform your videos with powerful tools at your
							fingertips!
						</p>
						<LinkScroll to="features" offset={-100} spy smooth>
							<Button className="relative" icon={"images/zap.svg"}>
								Try It Now
							</Button>
						</LinkScroll>
					</div>
					<div
						className={clsx(
							"absolute overflow-hidden shadow-500 z-0 rounded-3xl",
							" top-5 left-[calc(50%-80px)] right-10  max-md:left-[calc(50%+10px)] max-md:right-5"
						)}
					>
						<img
							src="images/hero.jpg"
							alt="hero"
							className="w-960 object-cover  max-lg:h-auto shadow-500 rounded-3xl"
						/>
					</div>
				</div>
			</Element>
		</section>
	);
}

export default Hero;
