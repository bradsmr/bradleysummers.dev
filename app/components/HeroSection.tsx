'use client';

import Image from 'next/image';

export default function HeroSection({ title, subtitle }: { title: string; subtitle: string; }) {
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src="/portrait.jpg" alt="Profile Picture" width={180} height={180} className="rounded-full mx-auto border-4 border-gray-50 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h1>
				<p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">{subtitle}</p>
				<p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
					Driven by a passion for technology, I leverage my IT expertise to deliver innovative software solutions.
				</p>
			</div>
		</section>
	);
}
