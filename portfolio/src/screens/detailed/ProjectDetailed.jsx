import { useNavigate, useParams } from "react-router-dom";
import projects from "../../projects.json";

function ProjectDetailed() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="p-6 text-red-500">Project not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col items-center">
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
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {project.techStack.map((tech, idx) => {
              const icons = {
                React:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                Redux:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
                JavaScript:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                HTML5:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                CSS3: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                Tailwind:
                  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
                Bootstrap:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
                "Node.js":
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
                Express:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
                "Socket.IO":
                  "https://www.svgrepo.com/show/342225/socket-io.svg",
                Python:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                Django:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
                DjangoRest:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/djangorest/djangorest-original.svg",
                MongoDB:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
                Firebase:
                  "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
              };

              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center w-24 h-24 p-3 bg-white/30 dark:bg-gray-800/50 rounded-lg shadow-md"
                >
                  <img
                    src={icons[tech]}
                    alt={tech}
                    className="w-12 h-12 object-contain mb-1"
                  />
                  <span className="text-sm font-medium text-center">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Links */}
      <div className="flex space-x-4 mb-6 justify-center">
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
            View Repository
          </a>
        )}
      </div>

      {/* Screenshots */}
      {project.screenshots?.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Screenshots</h2>
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            {project.screenshots.map((fileName, idx) => (
              <img
                key={idx}
                src={`/screenshots/${fileName}`} // <-- relative path to public
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => navigate(`/`)}
        class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Go Back
      </button>
    </div>
  );
}

export default ProjectDetailed;
