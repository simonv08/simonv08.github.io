import { useMemo } from "react";

export default function ProjectFilter({ projects = [], selectedTags = [], onChange }) {
  const allTags = useMemo(() => {
    const set = new Set();
    for (const p of projects) {
      (p.tags || []).forEach((t) => set.add(t));
    }
    return Array.from(set).sort();
  }, [projects]);

  const handleTagClick = (tag) => {
    if (!onChange) return;
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onChange(newTags);
  };

  return (
    <section className="px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-(--text)">Filter op tags</h3>
          {selectedTags.length > 0 && (
            <button
              type="button"
              aria-label="Verwijder filter"
              className="text-sm text-(--accent) hover:text-(--accent-hover)"
              onClick={() => onChange?.([])}
            >
              Filter wissen
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag cursor-pointer ${selectedTags.includes(tag) ? "active" : ""}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
