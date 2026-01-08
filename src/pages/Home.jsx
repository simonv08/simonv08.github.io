import { useState } from "react";
import { siteConfig } from "../siteConfig";
import projectData from "../data/projectdata.json";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProjectFilter from "../components/ProjectFilter";

export default function Home() {
  const projects = projectData.projects;
  const [selectedTags, setSelectedTags] = useState([]);

  const handleCardTagClick = (tag) => {
    setSelectedTags((prev) => (
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    ));
    const el = document.getElementById("projects-grid");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <Hero />
      <ProjectFilter projects={projects} selectedTags={selectedTags} onChange={setSelectedTags} />
      <Projects selectedTags={selectedTags} onTagClick={handleCardTagClick} />
    </div>
  );
}