import React, { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { clsx } from "clsx";

function Header() {
	const [hasScrolled, setHasScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setHasScrolled(window.scrollY > 32);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const [isOpen, setIsOpen] = useState(false);
	const NavLink = ({ title }) => (
		<LinkScroll
			className="base-bold text-p4 uppercase transition-colors duration-500 
    cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
			to={title}
			spy
			smooth
			offset={-200}
			activeClass="nav-active"
			onClick={() => setIsOpen(false)}
		>
			{title}
		</LinkScroll>
	);
	return (
		<header
			className={clsx(
				"fixed left-0 top-0 z-50 w-full py-10  ",
				hasScrolled &&
					"bg-black-100 bg-opacity-90 py-4 transition-all duration-500 backdrop-blur-[8px]"
			)}
		>
			<div className=" container flex h-14 items-center max-lg:px-5">
				<LinkScroll
					className=" flex-1 transition-transform duration-500"
					to="hero"
					spy
					smooth
					offset={-200}
					activeClass="nav-active"
				>
					<img
						src="images/xora.svg"
						className=" cursor-pointer "
						width={115}
						height={55}
						alt=""
					/>
				</LinkScroll>

				<div
					className={clsx(
						"w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0 ",
						{
							"max-lg:opacity-100 z-0": isOpen,
							"max-lg:opacity-0 max-lg:hidden": !isOpen,
						}
					)}
				>
					<div
						className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen
                 max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4"
					>
						<nav className="max-lg:relative max-lg:z-0 max-lg:my-auto">
							<ul className=" flex max-lg:block max-lg:px-12">
								<li className=" nav-li">
									<NavLink to="features" title="features"></NavLink>
									<div className="dot"></div>
									<NavLink to="pricing" title="pricing"></NavLink>
								</li>
								<li className="nav-logo">
									<LinkScroll
										className=" cursor-pointer"
										to="hero"
										offset={-200}
										activeClass=" nav-active"
										spy
										smooth
									>
										<img
											src="images/xora.svg"
											alt="logo"
											width={160}
											height={55}
										/>
									</LinkScroll>
								</li>
								<li className="nav-li">
									<NavLink to="faq" title="faq"></NavLink>
									<div className="dot"></div>
									<NavLink to="dowload" title="download"></NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<button
					className="lg:hidden z-10 size-10 border-2  rounded-full border-s4/25 
                flex justify-center items-center"
					onClick={() => setIsOpen(!isOpen)}
				>
					<img
						src={`images/${isOpen ? "close" : "magic"}.svg`}
						alt="magic"
						className="size-1/2 object-contain"
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
