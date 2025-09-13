import Image from "next/image";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<div>
				<h1 className="text-4xl font-bold tracking-light">
					Tori Rodgers <span className="block text-purple-700">Software Developer</span>
				</h1>
				<p className="mt-6 text-xl text-gray-700 leading-8">
					Curious, driven, and just getting started. A developer focused on
					building thoughtful, functional applications with clean code and
					scalable structure. Currently deepening my skills in full-stack
					development while exploring the intersection of software and design.
				</p>
        <div>
          <button className="px-8 py-3 rounded-lg bg-purple-800 text-white font-medium hover:bg-purple-500">
            About Me
            </button>
          <button className="px-8 py-3 rounded-lg border border-gray-600 hover:border-purple-500 font-medium">
            Contact Me
            </button>
        </div>
			</div>
		</div>
	);
}
