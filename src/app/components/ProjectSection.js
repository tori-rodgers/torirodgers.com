const ProjectSection = () => {
	const projects = [
		{
			title: "This website!",
			tags: ["NextJs", "React", "TailwindCSS"],
		},
		{
			title: "Filler 1",
			tags: ["NextJs", "React", "TailwindCSS"],
		},
		{
			title: "Filler 2",
			tags: ["NextJs", "React", "TailwindCSS"],
		},
	];
	return (
		<section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold text-white mb-12 text-center">
				Featured Projects
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{projects.map((project, index) => (
					<div
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
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectSection;
