import Image from 'next/image';

export default function ProjectsSection({ projects }: { projects: { name: string; link: string; }[] }) {
	return (
		<section className="py-8 sm:py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{projects.map((project) => (
						<div key={project.name} className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${project.name === "Under Construction" ? "filter grayscale" : ""}`}>
							{project.name === "Employee Management System" ? (
								<a href={project.link} className="block">
									<div className="aspect-video bg-gray-100 relative">
										<Image src="/code.jpg" alt={project.name} fill className="object-cover" />
									</div>
								</a>
							) : (
								<div className="aspect-video bg-gray-100 relative">
									<Image src="/code-old.jpg" alt={project.name} fill className="object-cover" />
								</div>
							)}
							<div className="p-4 sm:p-5">
								<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
								<p className="text-sm sm:text-base text-gray-600 mb-3">
									{project.name === "Employee Management System" ? "Developed a full stack employee management system web app with Java Spring Boot, React, and PostgreSQL, featuring role-based access and cloud deployment." : "This project is currently under construction and will be available soon."}
								</p>
								<div className="flex flex-col gap-2">
									{project.name === "Employee Management System" && (
										<>
											<a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
												Live Demo →
											</a>
											<a href="https://github.com/bradsmr/ems" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
												View Code on GitHub →
											</a>
										</>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
