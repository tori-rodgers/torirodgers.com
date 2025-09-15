"use client";

import { useState } from "react";
import Link from "next/link";

const HeroSection = () => {
	const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseMove = (ev) => {
		if (!isHovering) return;
		const rect = ev.currentTarget.getBoundingClientRect();
		const x = ((ev.clientX - rect.left) / rect.width) * 100;
		const y = ((ev.clientY - rect.top) / rect.height) * 100;
		setMousePosition({ x, y });
	};

	return (
		<div
			className="relative"
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<div
				className="pattern-bg default-fade"
				style={{
					opacity: isHovering ? 0 : 0.3,
					transition: "opacity 0.5s ease-in-out",
				}}
			></div>
			<div
				className="pattern-bg"
				style={{
					WebkitMask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
					mask: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,  rgb(15 23 42) 0%, transparent 35%)`,
					opacity: isHovering ? 0.3 : 0,
				}}
			></div>
			<div className="opacity-10">
				<div className="absolute top-0 right-0 sm:w-[600px] sm:h-[600px] w-[300px] h-[300px] bg-purple-700/50 rounded-full blur-3xl"></div>
				<div className="absolute top-4 right-4 sm:w-[400px] sm:h-[400px] w-[150px] h-[150px] bg-purple-500/60 rounded-full blur-2xl"></div>
				<div className="absolute top-8 right-8 sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] bg-purple-400/70 rounded-full blur-xl"></div>
			</div>
			<h1 className="text-4xl font-bold tracking-light text-white">
				Tori Rodgers{" "}
				<span className="block text-purple-700">Software Developer</span>
			</h1>
			<p className="mt-6 text-xl text-slate-300 leading-8">
				Curious, driven, and just getting started. A developer focused on
				building thoughtful, functional applications with clean code and
				scalable structure. Currently deepening my skills in full-stack
				development while exploring the intersection of software and design.
			</p>
			<div className="flex mt-10 gap-4">
				<button className="px-8 py-3 rounded-lg font-medium bg-purple-700 hover:bg-purple-500">
					About Me
				</button>
				<button className="px-8 py-3 rounded-lg font-medium border bg-slate-900 border-slate-600 hover:border-purple-500">
					Contact Me
				</button>
			</div>
		</div>
	);
};

export default HeroSection;
