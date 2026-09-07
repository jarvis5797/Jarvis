import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-centerflex flex-col items-center justify-center min-h-screen">
        
        <p className= "mb-4 text-sm uppercase tracking-[0.3em] text-gray-400" >
          Java Full Stack Developer
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ashutosh Raj Baranwal
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Backend-focused software engineer building scalable applications
          with Java, Spring Boot, microservices, Kafka and modern web
          technologies.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <div className="flex rounded-2xl border border-gray-800 bg-gray-950 p-2">

            <input
              type="text"
              placeholder="Ask anything about Ashutosh..."
              className="flex-1 bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-600"
            />

            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black">
              Ask
            </button>

          </div>
        </div>

        <p className="mt-5 text-sm text-gray-500">
          Try asking: "Why should I shortlist Ashutosh?"
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            4+ Years Experience
          </span>

          <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            Java
          </span>

          <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            Spring Boot
          </span>

          <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            Microservices
          </span>

          <span className="rounded-full border border-gray-800 px-4 py-2 text-sm text-gray-400">
            System Design
          </span>
        </div>

      </section>
    </main>
  );
}
