import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
function Hero() {
	return (
		<section
			className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36
             max-md:pt-36 max-md:pb-32 z-40"
		>
			<Element name="hero">
				<div className="container">
					<div className="relative z-20 max-w-512 max-lg:max-w-388">
						<div className="caption ">Video Editing</div>
						<h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12 ">
							Amazingly Simple{" "}
						</h1>
						<p className=" capitalize max-w-440 mb-14 body-1 max-md:mb-10">
							We designed XORA AI video editior to be an easy to use, quick to
							learn, and surprisingly powerful
						</p>
						<LinkScroll to="features" offset={-100} spy smooth>
							<Button icon={"images/zap.svg"}>Try It Now</Button>
						</LinkScroll>
					</div>
					<div className="absolute -top-16 w-[1230px] left-[calc(50%-350px)] lg:-top-32  z-4">
						<img
							src="images/hero.png"
							alt="hero"
							className="w-1230 max-lg:h-auto"
						/>
					</div>
				</div>
			</Element>
		</section>
	);
}

export default Hero;