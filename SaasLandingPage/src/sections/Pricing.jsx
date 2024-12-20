import clsx from "clsx";
import React, { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants/store";
import Button from "../components/Button.jsx";

function Pricing() {
	const [monthly, setMonthly] = useState(false);
	return (
		<section>
			<Element name="pricing" className=" mb-16">
				<div className="container ">
					<div
						className="max-w-960 max-xl:max-w-4xl border-2 pricing-head_before relative mx-auto 
                    border-l border-r max-lg:border-none border-s2 bg-s1/50 pb-40 max-md:pb-32 pt-28 max-md:pt-16 z-3"
					>
						<h3
							className="h3 mx-auto max-lg:h4 max-md:h5 capitalize text-center text-p4 
                        mb-14 max-:mb-11 max-w-lg max-sm:max-w-sm z-10"
						>
							flexible pricing for teams of all sizes
						</h3>
						<div className=" pricing-bg ">
							<img
								src="images/bg-outlines.svg"
								width={960}
								height={380}
								alt="outline"
								className=" relative -z-50"
							/>
							<img
								src="images/bg-outlines-fill.png"
								className=" opacity-5 absolute inset-0 mix-blend-soft-light"
								alt=""
							/>
						</div>
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
						</div>
					</div>
					{/* Pricing section */}
					<div
						className=" scroll-hide relative z-2 -mt-12 flex items-start 
						max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6 lg:justify-center"
					>
						{plans.map((plan, index) => (
							<div
								key={plan.id}
								className=" pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even
								 relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
							>
								{index === 1 && (
									<div className=" g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-t-3xl"></div>
								)}
								<div
									className={clsx(
										"absolute left-0 right-0 z-2  flex items-center justify-center",
										index == 1 ? " -top-6" : " -top-6 xl:-top-11"
									)}
								>
									<img
										src={plan.logo}
										alt={plan.title}
										className={clsx(
											"object-contain drop-shadow-2xl",
											index == 1 ? "size-[120px]" : "size-[88px]"
										)}
									/>
								</div>
								<div
									className={clsx(
										"relative flex flex-col items-start",
										index == 1 ? "pt-24" : "pt-12"
									)}
								>
									<div
										className={clsx(
											"small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
											index == 1 ? "border-p3 text-p3" : "border-p1 text-p1"
										)}
									>
										{plan.title}
									</div>
									<div
										className={clsx(
											" relative z-2 flex items-center justify-center w-full"
										)}
									>
										<div
											className={clsx(
												"h-num flex items-start ",
												index == 1 ? "text-p3" : "text-p4"
											)}
										>
											{monthly
												? "$" + plan.priceMonthly
												: "$" + plan.priceYearly}
											<div className=" text-xs">
												/month
											</div>
										</div>
									</div>
								</div>
								<div
									className={clsx(
										" body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center",
										index == 1 && "border-b"
									)}
								>
									{plan.caption}
								</div>
								<ul className=" mx-auto space-y-4 xl:px-7">
									{plan.features.map((feature) => (
										<li
											key={feature}
											className=" relative flex items-center gap-5"
										>
											<img
												src="images/check.png"
												className=" size-10 object-contain"
												alt="check"
											/>
											<p className=" flex-1">{feature}</p>
										</li>
									))}
								</ul>
								<div className=" mt-10 flex w-full justify-center">
									<Button icon={plan.icon}>Get Started</Button>
								</div>
								{index == 1 && (
									<p
										className=" small-compact mt-9 text-center text-p3  before:mx-2.5 after:mx-2.5 
									before:content-['-'] after:content-['-']"
									>
										Limited time offer
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</Element>
		</section>
	);
}

export default Pricing;
