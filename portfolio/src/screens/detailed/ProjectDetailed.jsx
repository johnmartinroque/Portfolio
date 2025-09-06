import { useParams } from "react-router-dom";
import projects from "../../projects.json";

function ProjectDetailed() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="p-6 text-red-500">Project not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Title & Role */}
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
        Role: <span className="font-medium">{project.role}</span>
      </p>

      {/* Image */}
      <div className="w-full h-auto mb-6">
        <img
          src={project.image}
          alt={project.alt}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Details */}
      <h2 className="text-2xl font-semibold mb-2">About the Project</h2>
      <p className="mb-6">{project.details}</p>

      {/* Tech Stack */}
      {project.techStack?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside mb-6">
            {project.techStack.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </>
      )}

      {/* Links */}
      <div className="flex space-x-4 mb-6">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            View Code
          </a>
        )}
      </div>

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.screenshots.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectDetailed;
