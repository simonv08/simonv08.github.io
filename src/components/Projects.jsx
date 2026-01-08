import { siteConfig } from "../siteConfig";
import ProjectCard from "./ProjectCard";
import projectData from "../data/projectdata.json";

export default function Projects({ selectedTags = [], onTagClick }) {
  const projects = projectData.projects;
  const filtered = selectedTags.length > 0
    ? projects.filter((p) => Array.isArray(p.tags) && selectedTags.every((tag) => p.tags.includes(tag)))
    : projects;

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-(--text) mb-8 text-center">Mijn Projecten</h2>

        {selectedTags.length > 0 && (
          <p className="text-center text-(--muted) mb-6">
            Filter actief: <span className="text-(--accent)">{selectedTags.join(", ")}</span> ({filtered.length} projecten)
          </p>
        )}

        {/* Grid met ProjectCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} selectedTags={selectedTags} onTagClick={onTagClick} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-(--muted) mt-8">Geen projecten gevonden voor deze tag.</p>
        )}
      </div>
    </section>
  );
}