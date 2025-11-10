import { useState } from "react";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      name: "Angular",
      description: "Powerful framework for building dynamic web applications",
      color: "from-red-500 to-red-600"
    },
    {
      name: "React",
      description: "Popular library for building interactive user interfaces",
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript for robust applications",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Firebase",
      description: "Backend platform for real-time applications",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for scalable server applications",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I leverage cutting-edge technologies to build robust, scalable,
            and performant web applications
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`
                bg-card border border-border rounded-2xl p-6 h-32
                flex flex-col items-center justify-center
                transition-all duration-300
                hover:scale-105 hover:border-primary/50
                cursor-pointer relative overflow-hidden
              `}>
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className={`
                  text-3xl font-bold bg-gradient-to-br ${tech.color} bg-clip-text text-transparent
                  group-hover:scale-110 transition-transform
                `}>
                  {tech.name.slice(0, 2)}
                </div>
                <div className="text-sm font-medium mt-2 text-center">{tech.name}</div>
              </div>

              {hoveredTech === tech.name && (
                <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 animate-fade-in">
                  <div className="bg-card border border-primary/50 rounded-lg p-4 shadow-glow">
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
