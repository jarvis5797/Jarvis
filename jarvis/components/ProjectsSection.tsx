import {projects} from "@/data/project";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const professionalProjects = projects.filter(
    (project) => project.type === "Professional"
  );

  const personalProjects = projects.filter(
    (project) => project.type === "Personal"
  );

  return (
    <section className="mt-24 w-full max-w-4xl text-left">

      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Projects
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-white">
          Things I've Built
        </h2>
      </div>

      <div>
        <h3 className="mb-5 text-xl font-medium text-white">
          Professional Projects
        </h3>

        <div className="space-y-6">
          {professionalProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-5 text-xl font-medium text-white">
          Personal Projects
        </h3>

        <div className="space-y-6">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>

    </section>
  );
}