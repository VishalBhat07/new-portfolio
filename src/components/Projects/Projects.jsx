import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import { CardStack } from "../ui/card-stack";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projects[0].category);

  const cardItems = useMemo(() => {
    const stack = projects.find((s) => s.category === activeCategory);
    return (stack?.items ?? []).map((proj, i) => ({
      id:         `${activeCategory}-${i}`,
      title:      proj.name,
      description: proj.desc,
      imageSrc:   proj.image,
      href:       proj.live && proj.live !== proj.url ? proj.live : undefined,
      githubHref: proj.url,
      tag:        proj.status,
    }));
  }, [activeCategory]);

  return (
    <section id="projects" className="mb-36">
      {/* Section header */}
      <div className="flex items-center space-x-4 mb-10">
        <h2 className="terminal-text text-xl font-bold uppercase tracking-widest">
          Active Projects
        </h2>
        <div className="grow h-px bg-tokyo-border" />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {projects.map((stack) => (
          <button
            key={stack.category}
            onClick={() => setActiveCategory(stack.category)}
            className={`px-4 py-2 terminal-text text-xs uppercase tracking-wider rounded transition-all ${
              activeCategory === stack.category
                ? "bg-tokyo-purple text-tokyo-bg font-bold"
                : "bg-tokyo-bg border border-tokyo-border text-tokyo-text-dim hover:border-tokyo-purple hover:text-tokyo-purple"
            }`}
          >
            {stack.category}
          </button>
        ))}
      </div>

      {/* Card stack — key remounts so cards spring in fresh on category switch */}
      <CardStack
        key={activeCategory}
        items={cardItems}
        initialIndex={0}
        cardWidth={500}
        cardHeight={320}
        overlap={0.5}
        spreadDeg={44}
        maxVisible={7}
        autoAdvance
        intervalMs={2600}
        pauseOnHover
        showDots
      />
    </section>
  );
}
