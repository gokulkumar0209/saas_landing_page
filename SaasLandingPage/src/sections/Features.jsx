import React from "react";
import { Element, Link } from "react-scroll";
import { details, features } from "../constants/store";
import Button from "../components/Button";

function Features() {
	return (
		<section>
			<Element name="features">
				<div className="container">
					<div
						className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col
				 feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 "
					>
						{features.map(({ id, icon, caption, title, text, button }) => (
							<div
								key={id}
								className=" relative z-40 px-5 md:px-10 pb-5 md:pb-10 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
							>
								<div className="w-full flex justify-start items-start">
									<div className="-ml-3 mb-12 flex items-center justify-center flex-col">
										<div className="w-0.5 h-16 bg-s3" />
										<img
											src={icon}
											alt={icon}
											className="size-28 object-contain"
										/>
									</div>
								</div>
								<p className="caption mb-6 max-md:mb-5">{caption}</p>
								<h3 className="max-w-400 mb-6 max-md:mb-6 h3 max-md:h5 text-p4 uppercase">
									{title}
								</h3>
								<p className="mb-10 max-md:mb-8 body-1 max-md:body-3">{text}</p>
								<Button icon={button.icon}>{button.title}</Button>
							</div>
						))}
						<div className="w-full   opacity-100 max-md:hidden ">
							<ul className="relative flex justify-around items-center w-full bg-s3/20 border-2 border-s3 rounded-7xl  ">
								<div className=" absolute bg-s3/60 w-full h-[0.5px] left-0 right-0 top-20  "></div>
								{details.map(({ id, icon, title }) => (
									<li key={id} className=" relative pt-16 px-4 pb-14 z-2">
										<div
											className="flex justify-center items-center mx-auto mb-3  border-2 border-opacity-0 border-s2/20 rounded-full
										 hover:border-s4 transition-all duration-500 shadow-500 size-20   "
										>
											<img
												src={icon}
												alt=""
												className=" size-17/20 object-contain"
											/>
										</div>
										<h3 className=" uppercase mb-0 z-2 text-center  mx-auto max-md:text-xs">{title}</h3>
										<div className=" -z-1  absolute bg-s3/60 w-[1px] h-full bottom-0  top-8 left-1/2 "></div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Element>
		</section>
	);
}

export default Features;
