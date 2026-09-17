import { Experience } from "@/data/experience";

type ExperienceCardProps = {
    experience: Experience;
}

export default function ExperienceCard({
    experience,
}: ExperienceCardProps) {
    return(
        <div className="relative border-l border-gray-800 pl-6 text-left">

      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-white" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {experience.role}
          </h3>

          <p className="text-gray-400">
            {experience.company}
          </p>
        </div>

        <p className="text-sm text-gray-500">
          {experience.duration}
        </p>
      </div>

      <p className="mt-2 text-sm text-gray-600">
        {experience.location}
      </p>

      <p className="mt-4 leading-7 text-gray-400">
        {experience.description}
      </p>

      <ul className="mt-4 space-y-2">
        {experience.responsibilities.map(
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

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
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