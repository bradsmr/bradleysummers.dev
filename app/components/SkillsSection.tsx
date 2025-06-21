export default function SkillsSection({ skills }: { skills: string[] }) {
	return (
		<section className="bg-gray-50 py-8 sm:py-12">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Skills & Technologies</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill) => (
						<div key={skill} className="bg-white p-4 sm:p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow text-sm sm:text-base">
							{skill}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
