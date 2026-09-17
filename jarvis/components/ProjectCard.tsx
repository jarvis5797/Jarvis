import { Project } from "@/data/project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 text-left">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                <div>
                    <h3 className="text-xl font-semibold text-white">
                        {project.name}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                        {project.type} Project
                    </p>
                </div>

            </div>

            <p className="mt-4 leading-7 text-gray-400">
                {project.description}
            </p>

            <ul className="mt-5 space-y-2">
                {project.responsibilities.map(
                    (responsibility, index) => (
                        <li
                            key={index}
                            className="flex gap-3 text-sm leading-6 text-gray-400"
                        >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />

                            <span>{responsibility}</span>
                        </li>
                    )
                )}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-500"
                    >
                        {technology}
                    </span>
                ))}
            </div>

        </div>
    );
}