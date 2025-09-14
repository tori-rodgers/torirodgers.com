"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const ProjectSection = () => {
	const projects = [
		{
			id: 1,
			title: "This website!",
			tags: ["NextJs", "React", "TailwindCSS"],
			description: "portfolio website",
			fullDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "/portfolio.png",
			techStack: ["NextJs", "React", "TailwindCSS", "Javascript"],
		},
		{
			id: 2,
			title: "Project 2",
			tags: ["NextJs", "React", "TailwindCSS"],
			description: "Short description",
			fullDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "/project2.png",
			techStack: ["NextJs", "React", "TailwindCSS", "Javascript"],
		},
		{
			id: 3,
			title: "Project 3",
			tags: ["NextJs", "React", "TailwindCSS"],
			description: "Short description",
			fullDescription:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "/project3.png",
			techStack: ["NextJs", "React", "TailwindCSS", "Javascript"],
		},
	];

	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectClick = (id) => {
		setSelectedProject(id);
	};

	const handleCloseModal = () => {
		setSelectedProject(null);
	};

	const handleNextProject = () => {
		const currentIndex = projects.findIndex(
			(project) => project.id === selectedProject
		);
		if (currentIndex === -1) {
			return null;
		}
		const nextIndex = (currentIndex + 1) % projects.length;
		setSelectedProject(projects[nextIndex].id);
	};

	const handlePrevProject = () => {
		const currentIndex = projects.findIndex(
			(project) => project.id === selectedProject
		);

		if (currentIndex === -1) {
			return null;
		}

		const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

		setSelectedProject(projects[prevIndex].id);
	};

	return (
		<section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold text-white mb-12 text-center">
				Featured Projects
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{projects.map((project, index) => (
					<button 
                        onClick={() => handleProjectClick(project.id)}
						key={index}
						className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors hover:shadow-sm text-left"
					>
						<div className="flex flex-col h-full">
							<h3 className="text-lg font-semibold text-white mb-2">
								{project.title}
							</h3>
							<div className="flex flex-wrap gap-1 mt-auto">
								{project.tags.map((tag, index) => (
									<span
										key={index}
										className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/30 "
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</button>
				))}
			</div>
			{selectedProject && (
				<ProjectModal
					project={projects.find((project) => project.id === selectedProject)}
					onClose={handleCloseModal}
					onNext={handleNextProject}
					onPrev={handlePrevProject}
				/>
			)}
		</section>
	);
};

export default ProjectSection;
