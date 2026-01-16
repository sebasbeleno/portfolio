import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import {
	allProjects,
	allBlogs,
} from "../../.content-collections/generated/index.js";

export const Route = createFileRoute("/")({
	component: Portfolio,
});

function Portfolio() {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<HeroSection />
			<ProjectsSection projects={allProjects} />
			<BlogSection blogPosts={allBlogs} />
			<Footer />
		</div>
	);
}
