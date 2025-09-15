import ProjectSection from "./components/ProjectSection";
import HeroSection from "./components/HeroSection";
import Link from "next/link";

export default function Home() {
	return (
		<div className="container mx-auto p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<HeroSection />
			<ProjectSection />
		</div>
	);
}
