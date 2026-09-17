import {experiences} from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperienceSection() {
    return (
        <section className="mt-24 w-full max-w-4xl text-left">
      
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Experience
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-white">
          Professional Journey
        </h2>
      </div>

      <div className="space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}-${experience.duration}`}
            experience={experience}
          />
        ))}
      </div>

    </section>
    );
}