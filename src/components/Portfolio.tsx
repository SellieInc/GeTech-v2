import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import dashboardImg from "@/assets/project-dashboard.jpg";
import socialImg from "@/assets/project-social.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and real-time updates",
      image: ecommerceImg,
      tech: ["React", "TypeScript", "Firebase", "Stripe"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Progressive web app for data visualization with real-time metrics and interactive charts",
      image: dashboardImg,
      tech: ["Angular", "TypeScript", "D3.js", "Node.js"],
      link: "#"
    },
    {
      title: "Social Media App",
      description: "Engaging social platform with posts, comments, likes, and real-time notifications",
      image: socialImg,
      tech: ["React", "TypeScript", "Firebase", "PWA"],
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise 
            in building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                  <Button size="sm" className="bg-primary/90 hover:bg-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/50 hover:border-primary">
                    <Code className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
