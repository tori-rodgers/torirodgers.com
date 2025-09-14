import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed w-full border border-[#33353F] top-0 left-0 right-0 z-10 bg-gray-900 bg-opacity-100">
			<div className="flex flex-wrap items-center justify-end w-full py-2 px-2 sm:px-4 md:px-8 lg:px-12 lg:py-4">
				<ul className="flex p-1 space-x-4 md:space-x-8 mt-0">
					<li key="about">
						<Link href="#about" className="hover:text-slate-200">
							About
						</Link>
					</li>
					<li key="projects">
						<Link href="#projects" className="hover:text-slate-200">
							Projects
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
