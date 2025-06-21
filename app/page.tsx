'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-white pt-12">
			<HeroSection title="Bradley Summers" subtitle="Software Developer with Strong IT Background" />
			<SkillsSection skills={["Java", "Object-Oriented Programming", "Spring Boot", "Spring Security", "JPA/Hibernate", "SQL", "RESTful APIs", "Git", "Docker", "Python", "PowerShell"]} />
			<ProjectsSection projects={[{ name: "Employee Management System", link: "https://ems.bradleysummers.dev" }, { name: "Under Construction", link: "#" }]} />
			<ContactSection contactInfo={{ linkedin: "https://www.linkedin.com/in/hire-bradley-summers/", github: "https://github.com/bradsmr", email: "bradsmr@gmail.com", location: "Los Angeles, CA" }} />
		</main>
	);
}
