import clsx from "clsx";
import React, { useState } from "react";
import { Element } from "react-scroll";

function Pricing() {
	const [monthly, setMonthly] = useState(false);
	return (
		<section>
			<Element name="pricing">
				<div className="container">
					<div
						className="max-w-960 max-xl:max-w-4xl border-2 pricing-head_before relative mx-auto 
                    border-l border-r max-lg:border-none border-s2 bg-s1/50 pb-40 max-md:pb-32 pt-28 max-md:pt-16 z-3"
					>
						<h3
							className="h3 mx-auto max-lg:h4 max-md:h5 capitalize text-center text-p4 
                        mb-14 max-:mb-11 max-w-lg max-sm:max-w-sm"
						>
							flexible pricing for teams of all sizes
						</h3>
						<div
							className=" relative z-4 mx-auto flex border-[2px] border-s3/25 rounded-3xl
                         bg-s1/50 p-2  backdrop-blur-[6px] w-[375px] max-md:w-[310px]"
						>
							<button
								className={clsx(" pricing-head_btn", monthly && "text-p3")}
								onClick={() => setMonthly(true)}
							>
								Monthly
							</button>
							<button
								className={clsx(" pricing-head_btn", !monthly && "text-p3")}
								onClick={() => setMonthly(false)}
							>
								Annual
							</button>
							<div
								className={clsx(
									"g4 absolute pricing-head_btn_before before:h-100   w-[calc(50%-8px)] top-2 left-2 bottom-2 right-2 shadow-400 rounded-14 overflow-hidden transition-transform ease-in-out duration-500",
									!monthly && "translate-x-full"
								)}
							></div>
							<div className="pricing-bg">
								<img
									src="images/bg-outlines.svg"
									width={960}
									height={380}
									alt="outline"
								/>
							</div>
						</div>
					</div>
				</div>
			</Element>
		</section>
	);
}

export default Pricing;
