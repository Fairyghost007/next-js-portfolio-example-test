import Image from "next/image";


const projects = [
  { title: "Movie browsing app", image: "/images/project1.png", description: "A movie browsing app built with React Tailwind CSS." },
  { title: "Product card component", image: "/images/project2.png", description: "A product card component built with React Tailwind CSS." },
];

export default function Page() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-6">
      <h2 className="text-center text-4xl font-bold text-teal-400 mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
          >
            <Image
              fil={true}
              src={project.image}
              width={500}
              height={300}
              alt={project.title}
              className="object-cover w-full h-60"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
